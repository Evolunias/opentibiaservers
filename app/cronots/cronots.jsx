import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-cronots",
  "slug": "cronots",
  "name": "CronOTS",
  "host": "cronots.com",
  "ip": "cronots.com",
  "port": 7171,
  "location": "POLAND",
  "version": "7.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 49,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-7-6-cronots-custom-daily-unique-systems.303472/",
  "source_url": "https://otland.net/threads/poland-7-6-cronots-custom-daily-unique-systems.303472/",
  "website_url": "https://cronots.com/",
  "external_launch_url": "https://cronots.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "CronOTS",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.651Z",
  "last_seen_at": "2025-12-23T01:36:01+0100",
  "last_check": "2026-07-28T02:51:27.651Z",
  "official_summary": "CronOTS enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 7.6, server address: cronots.com, port 7171, official website reachable during import, 12 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "CronOTS is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://cronots.com/",
    "Official website responded with HTTP 200",
    "Server address: cronots.com",
    "Server port: 7171",
    "Thread author: Norbix",
    "Original post date: 12/23/2025",
    "Forum discussion: 12 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 7.6",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "POLAND",
    "7.6",
    "POLAND",
    "7.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://cronots.com/",
      "label": "CronOTS official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-7-6-cronots-custom-daily-unique-systems.303472/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://cronots.com/",
      "label": "https://cronots.com/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Unicron",
      "label": "Unicron"
    }
  ],
  "faq_items": [
    {
      "question": "Is CronOTS verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://cronots.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm CronOTS?",
      "answer": "Start with https://cronots.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "CronOTS exposes https://cronots.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function CronotsPage() {
  return <CuratedGuideArticle page={page} />;
}
