# SEO Plan

This repo now includes the technical SEO foundation for OpenTibiaServers.com:

- Dynamic per-server titles and descriptions
- Per-server keyword generation based on server name, version, type, and location
- Canonical URLs
- Structured data for server detail pages
- `robots.txt`
- Dynamic `sitemap.xml`
- Indexable homepage and community metadata

## Server Name Targeting

Each server detail page targets branded search intent around:

- `<server name>`
- `<server name> open tibia`
- `<server name> ot server`
- `<server name> review`
- `<server name> players online`

This is generated in:

- `lib/seo.js`
- `app/server/[id]/page.jsx`

## Important Ranking Constraint

Metadata alone will not rank the site `#1` for every server name.

Ranking strength will come from:

- unique, indexable server pages
- review volume
- conversation volume
- uptime history
- updated player counts
- claim ownership and authoritative listing maintenance
- internal linking from the homepage, community boards, and related listings
- backlinks from actual server owners and communities

## Next SEO Work

High-impact next steps:

1. Add server slug URLs instead of ID-only URLs.
2. Add internal related-server links by client version, source, and world type.
3. Add indexable review pagination if review volume grows.
4. Add topic pages for `/community/[topic]` and category pages for crawl depth.
5. Add Open Graph images for branded listing sharing.
6. Add search pages with controlled crawl rules once filters become stable.
