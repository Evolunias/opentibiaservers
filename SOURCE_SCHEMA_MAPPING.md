# Source Schema Mapping

OpenTibiaServers.com stores imported listings in `public.servers`. The table is source-aware so otservlist.org and future OTLand imports can share the same browsing UI without losing source-specific data.

## Required Migrations

Run these Supabase migrations in order:

1. `supabase/migrations/001_add_auth_and_users.sql`
2. `supabase/migrations/002_add_external_source_fields.sql`
3. `supabase/migrations/add_sync_logs.sql`
4. `supabase/migrations/003_platform_features.sql`

`003_platform_features.sql` adds the non-source platform tables: `server_claims`, `server_reviews`, `server_messages`, `community_categories`, `community_topics`, `community_posts`, and `server_uptime_checks`.

## Sync Endpoint

Manual or cron-triggered sync:

```bash
curl -X POST "https://your-domain.com/api/sync-servers" \
  -H "x-sync-token: your-sync-token" \
  -H "Content-Type: application/json" \
  -d "{\"pageLimit\":3,\"includeDetails\":true,\"detailLimit\":25}"
```

Environment variables:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` or `SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser read key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side write key for sync |
| `SYNC_TOKEN` | Shared secret for `/api/sync-servers` |
| `OTSERVLIST_BASE_URL` | Optional source base URL, defaults to `https://otservlist.org` |
| `OTSERVLIST_PAGE_LIMIT` | Optional default listing page count |
| `OTSERVLIST_INCLUDE_DETAILS` | Optional `true` to fetch detail pages by default |
| `OTSERVLIST_DETAIL_LIMIT` | Optional max detail pages per sync |
| `NEXT_PUBLIC_SERVER_REFRESH_INTERVAL_MS` | Browser polling fallback for live SQL changes, defaults to `30000` |

## otservlist.org Mapping

| otservlist field | `servers` column | Notes |
| --- | --- | --- |
| `/ots/{id}` | `source_id` | Stable external ID, unique with `source` |
| Detail/list URL | `source_url` | Link back to the source record |
| Rank on list page | `source_rank` | Rank in current imported sort |
| Address/IP/domain | `host`, `ip` | `ip` remains the app display/search key |
| Port | `port` | Detail page overrides list default `7171` |
| Server name | `name` | Trimmed to 255 chars |
| Players online | `players_online` | Current online count |
| Max players | `max_players` | Parsed from `online / max` |
| Peak players | `players_peak` | Parsed from `(peak)` when present |
| Uptime | `uptime_percent` | Numeric percentage |
| Points | `points` | Source ranking points |
| EXP | `exp_rate` | Numeric rate from `x100` style text |
| PVP type | `world_type`, `pvp_type` | Normalized to `PVP`, `Non-PVP`, `PVP-Enforced`, or `FUN` |
| Client version | `version`, `client_type` | `n/a` is retained when source reports it |
| Country flag | `location` | Flag code or readable title mapped to country |
| Unique players | `unique_players` | Detail page only |
| Multi clients | `multi_client_level` | Detail page only |
| Monsters | `monsters_count` | Detail page only |
| NPCs | `npcs_count` | Detail page only |
| Server engine | `server_engine` | Detail page `Server:` value |
| Owner | `source_owner_name` | Source owner name, not account email |
| Added | `source_added_text` | Stored as source text to avoid timezone loss |
| Updated | `source_updated_text` | Detail page source text |
| Last update | `source_last_update_text` | List page source text |
| Description | `description` | Detail page description |
| All parsed source values | `source_payload` | JSONB raw mapping for audit/remapping |

## Future OTLand Mapping

Use the same columns:

| OTLand field | `servers` column |
| --- | --- |
| Thread ID | `source_id` |
| Thread URL | `source_url` |
| Thread title | `name` |
| Launch/update post date | `source_added_text` / `source_updated_text` |
| Host/website in post | `host`, `website_url` |
| Client/version tags | `version`, `tags` |
| Parsed post body | `description`, `source_payload` |

OTLand parsing should be added as a second importer that writes `source = 'otland.net'`.
