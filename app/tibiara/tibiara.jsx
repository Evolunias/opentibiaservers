import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-tibiara",
  "slug": "tibiara",
  "name": "Tibiara",
  "host": "tibiara.com",
  "ip": "tibiara.com",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 7,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-custom-tibiara-real-engine-7-4-8-0-1x-long-term-hardcore-smooth-client-14th-march.291313/",
  "source_url": "https://otland.net/threads/usa-custom-tibiara-real-engine-7-4-8-0-1x-long-term-hardcore-smooth-client-14th-march.291313/",
  "website_url": "https://tibiara.com",
  "external_launch_url": "https://tibiara.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Tibiara",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2025-03-07T15:36:43+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Tibiara enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: tibiara.com, port 7171, official website reachable during import, 256 replies, 45,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Tibiara is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://tibiara.com",
    "Official website responded with HTTP 200",
    "Server address: tibiara.com",
    "Server port: 7171",
    "Thread author: Danger II",
    "Original post date: 3/7/2025",
    "Forum discussion: 256 replies",
    "Thread visibility: 45,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.4",
    "USA",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://tibiara.com",
      "label": "Tibiara official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-custom-tibiara-real-engine-7-4-8-0-1x-long-term-hardcore-smooth-client-14th-march.291313/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://tibiara.com",
      "label": "https://tibiara.com"
    }
  ],
  "faq_items": [
    {
      "question": "Is Tibiara verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://tibiara.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Tibiara?",
      "answer": "Start with https://tibiara.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Tibiara exposes https://tibiara.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function TibiaraPage() {
  return <CuratedGuideArticle page={page} />;
}
