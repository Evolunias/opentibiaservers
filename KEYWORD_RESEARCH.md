# OpenTibiaServers.com Keyword Research

This repo includes a deterministic keyword candidate generator for Open Tibia server SEO.

## Generate 100,000 Candidate Keywords

```bash
node scripts/generate-keyword-research.mjs --count=100000
```

Outputs:

- `data/keyword-research/open-tibia-keywords-100000.csv`
- `data/keyword-research/open-tibia-keywords-100000.json`
- `data/keyword-research/summary.json`

## Search Volume Policy

Do not invent search volumes.

True deterministic search volume requires a provider export or API, such as:

- Google Ads Keyword Planner
- DataForSEO
- Ahrefs
- Semrush

The generated CSV includes empty fields for:

- `search_volume`
- `volume_source`
- `volume_country`
- `volume_checked_at`
- `cpc_usd`
- `competition`

Those fields should be backfilled from a provider and committed as a dated export.

## Merge Provider Search Volumes

Export a CSV from Google Keyword Planner, DataForSEO, Ahrefs, or Semrush with at least a keyword/query column and a search-volume column. Then run:

```bash
node scripts/merge-keyword-volumes.mjs \
  --volumes=data/keyword-research/provider-export.csv \
  --source=dataforseo \
  --country=US
```

The merge script accepts common column names such as `keyword`, `Keyword`, `query`, `Search term`, `search_volume`, `Search volume`, `Avg. monthly searches`, `CPC`, and `Competition`.

## Keyword Clusters

The generator creates keywords for:

- exact server names
- official Tibia worlds
- Open Tibia ecosystem terms
- client-version facets
- country/region facets
- deterministic long-tail combinations

## Target Page Types

Each row maps to a suggested page type:

- `server_profile`
- `historical_reference`
- `wiki_reference`
- `client_facet`
- `country_region_facet`

This keeps the keyword list tied to pages that can actually satisfy user intent.

## Programmatic Page Policy

Keyword pages resolve at:

```text
/topics/<keyword-slug>
```

The route can serve every generated keyword, but indexing is gated:

- high-priority, non-synthetic pages can be indexed
- low-priority synthetic long-tail pages are `noindex,follow` until enriched
- the sitemap includes only the highest-priority indexable topic pages

This prevents the site from looking like a spam network while still allowing the community to enrich long-tail pages over time.

## Community Enrichment

Keyword pages support contribution primitives through Supabase migrations:

- `keyword_page_comments`
- `keyword_page_screenshots`

Registered users can add notes and screenshots. Server owners should still claim actual server listings under `/servers/<server-slug>` for official websites, launchers, Discord links, FAQs, gallery images, and profile sections.

## Priority Page Set

The initial exact-match quality set is tracked in:

- `data/priority-pages.json`

Start with:

- servers: Evolunia, Cyntara, OTMadness
- official worlds: Antica, Nova
- ecosystem: otservlist, community archive

Expand this list manually with pages that can receive genuinely useful research, sources, screenshots, community interaction, and internal links.
