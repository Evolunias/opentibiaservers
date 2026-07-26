# Hourly Automation Setup

This project now supports three scheduled maintenance endpoints:

- `/api/sync-servers`
- `/api/enrich-servers`
- `/api/monitor-servers`
- `/api/sync-directory`

Recommended hourly flow:

1. Import the top 100 listings from otservlist.org into `public.servers`
2. Enrich those listings from official server websites
3. Monitor claimed/imported hosts for availability

The recommended scheduler target is now:

- `/api/sync-directory`

That route orchestrates all three maintenance operations in one secured call.

## GitHub Actions scheduler

The repo includes:

- `.github/workflows/hourly-directory-sync.yml`

Required GitHub repository secrets:

- `OTS_PLATFORM_URL`
  - Example: `https://opentibiaservers.com`
- `OTS_SYNC_TOKEN`
  - Must match the deployed `SYNC_TOKEN`

Required deployment environment variables:

- `SCRAPINGBEE_API_KEY`
- `OTSERVLIST_FETCH_MODE=scrapingbee`

## Payload defaults

The workflow calls:

```json
{"fetchMode":"scrapingbee","pageLimit":20,"includeDetails":true,"detailLimit":1000,"officialResearchLimit":25,"enrichLimit":100,"monitorLimit":100}
```

That captures up to 1,000 otservlist rows through ScrapingBee, enriches a bounded subset of official sites, and refreshes monitoring data each hour.

## Permissions model

Imported facts stay source-driven.

Claimed owners and direct submitters can update the presentation layer through the server detail page editor:

- `template_name`
- `promo_headline`
- `promo_subheadline`
- `contact_discord`
- `launcher_url`
- `trailer_url`
- `feature_bullets`
- `gallery_images`
- `faq_items`
- `custom_sections`

RLS already restricts updates on `public.servers` to the owning user or claimed owner.
