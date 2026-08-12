import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-valantis-online",
  "slug": "valantis-online",
  "name": "Valantis Online",
  "host": "valantis.online",
  "ip": "valantis.online",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 18,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-4-valantis-online-launching-16-1.303655/",
  "source_url": "https://otland.net/threads/usa-7-4-valantis-online-launching-16-1.303655/",
  "website_url": "https://valantis.online/",
  "external_launch_url": "https://valantis.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Valantis Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.161Z",
  "last_seen_at": "2026-01-10T04:11:54+0100",
  "last_check": "2026-07-28T02:51:25.161Z",
  "official_summary": "Valantis Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: valantis.online, port 7171, official website reachable during import, 73 replies, 12,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Valantis Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://valantis.online/",
    "Official website responded with HTTP 200",
    "Server address: valantis.online",
    "Server port: 7171",
    "Thread author: furstwin",
    "Original post date: 1/10/2026",
    "Forum discussion: 73 replies",
    "Thread visibility: 12,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.4",
    "USA",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://valantis.online/",
      "label": "Valantis Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-4-valantis-online-launching-16-1.303655/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://valantis.online/",
      "label": "https://valantis.online/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Valantis Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://valantis.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Valantis Online?",
      "answer": "Start with https://valantis.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Valantis Online exposes https://valantis.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ValantisOnlineServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
