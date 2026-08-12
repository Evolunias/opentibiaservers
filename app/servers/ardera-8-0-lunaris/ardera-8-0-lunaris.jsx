import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-ardera-8-0-lunaris",
  "slug": "ardera-8-0-lunaris",
  "name": "Ardera 8.0 (Lunaris)",
  "host": "ardera.org",
  "ip": "ardera.org",
  "port": 7171,
  "location": "Canada",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 93,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-custom-ardera-8-0-lunaris-yurots-inspired-server-24-06-2023-20-00-utc-saturday.285217/",
  "source_url": "https://otland.net/threads/canada-custom-ardera-8-0-lunaris-yurots-inspired-server-24-06-2023-20-00-utc-saturday.285217/",
  "website_url": "https://ardera.org",
  "external_launch_url": "https://ardera.org",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Ardera 8.0 (Lunaris)",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2023-06-16T08:44:49+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "Ardera 8.0 (Lunaris) enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 8.0, server address: ardera.org, port 7171, 23 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Ardera 8.0 (Lunaris) is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://ardera.org",
    "Server address: ardera.org",
    "Server port: 7171",
    "Thread author: Acubens",
    "Original post date: 6/16/2023",
    "Forum discussion: 23 replies",
    "Thread visibility: 5,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "8.0",
    "Canada",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://ardera.org",
      "label": "Ardera 8.0 (Lunaris) official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-custom-ardera-8-0-lunaris-yurots-inspired-server-24-06-2023-20-00-utc-saturday.285217/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://ardera.org",
      "label": "https://ardera.org"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/55c5aa1d1857873e0e4199169529c9da",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Ardera 8.0 (Lunaris) verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://ardera.org as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Ardera 8.0 (Lunaris)?",
      "answer": "Start with https://ardera.org and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Ardera 8.0 (Lunaris) exposes https://ardera.org from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Ardera80LunarisServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
