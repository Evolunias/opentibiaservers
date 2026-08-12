import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-treasura",
  "slug": "treasura",
  "name": "Treasura",
  "host": "treasura.online",
  "ip": "treasura.online",
  "port": 7171,
  "location": "Poland",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 37,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-8-00-treasura-new-pvp-world-long-term-x1-start-21-01-2026-at-20-00-cet.303688/",
  "source_url": "https://otland.net/threads/poland-8-00-treasura-new-pvp-world-long-term-x1-start-21-01-2026-at-20-00-cet.303688/",
  "website_url": "https://treasura.online/",
  "external_launch_url": "https://treasura.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Treasura",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.163Z",
  "last_seen_at": "2026-01-14T14:09:09+0100",
  "last_check": "2026-07-28T02:51:25.163Z",
  "official_summary": "Treasura enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8, server address: treasura.online, port 7171, official website reachable during import, 25 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Treasura is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://treasura.online/",
    "Official website responded with HTTP 200",
    "Server address: treasura.online",
    "Server port: 7171",
    "Thread author: Kubakos",
    "Original post date: 1/14/2026",
    "Forum discussion: 25 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8",
    "Poland",
    "8.00"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://treasura.online/",
      "label": "Treasura official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-8-00-treasura-new-pvp-world-long-term-x1-start-21-01-2026-at-20-00-cet.303688/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://treasura.online/",
      "label": "https://treasura.online/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Treasura verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://treasura.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Treasura?",
      "answer": "Start with https://treasura.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Treasura exposes https://treasura.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function TreasuraServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
