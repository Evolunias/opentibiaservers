import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-crownots-low-rate-4fun-server",
  "slug": "crownots-low-rate-4fun-server",
  "name": "CrownOTS low rate 4fun server",
  "host": "crownots.eu",
  "ip": "crownots.eu",
  "port": 7171,
  "location": "Poland",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 62,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-7-4-crownots-low-rate-4fun-server.304751/",
  "source_url": "https://otland.net/threads/poland-7-4-crownots-low-rate-4fun-server.304751/",
  "website_url": "https://crownots.eu",
  "external_launch_url": "https://crownots.eu",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "CrownOTS low rate 4fun server",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2026-06-14T21:44:53+0200",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "CrownOTS low rate 4fun server enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 7.4, server address: crownots.eu, port 7171, official website reachable during import, 5 replies, 383 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "CrownOTS low rate 4fun server is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://crownots.eu",
    "Official website responded with HTTP 200",
    "Server address: crownots.eu",
    "Server port: 7171",
    "Thread author: PuszekLDZ",
    "Original post date: 6/15/2026",
    "Forum discussion: 5 replies",
    "Thread visibility: 383 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "7.4",
    "Poland",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://crownots.eu",
      "label": "CrownOTS low rate 4fun server official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-7-4-crownots-low-rate-4fun-server.304751/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://crownots.eu",
      "label": "https://crownots.eu"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/puszekgamer",
      "label": "puszekgamer"
    }
  ],
  "faq_items": [
    {
      "question": "Is CrownOTS low rate 4fun server verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://crownots.eu as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm CrownOTS low rate 4fun server?",
      "answer": "Start with https://crownots.eu and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "CrownOTS low rate 4fun server exposes https://crownots.eu from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function CrownotsLowRate4funServerPage() {
  return <CuratedGuideArticle page={page} />;
}
