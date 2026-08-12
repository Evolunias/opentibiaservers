import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-isaworld-online-7-4-7-72",
  "slug": "isaworld-online-7-4-7-72",
  "name": "IsaWorld Online 7.4/7.72",
  "host": "isaworld.online",
  "ip": "isaworld.online",
  "port": 7272,
  "location": "Sweden",
  "version": "7.72",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 59,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/sweden-real-map-2x-isaworld-online-7-4-7-72-launch-17-7.305010/",
  "source_url": "https://otland.net/threads/sweden-real-map-2x-isaworld-online-7-4-7-72-launch-17-7.305010/",
  "website_url": "https://isaworld.online/",
  "external_launch_url": "https://isaworld.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "IsaWorld Online 7.4/7.72",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.276Z",
  "last_seen_at": "2026-07-17T22:01:52+0200",
  "last_check": "2026-07-28T02:51:23.276Z",
  "official_summary": "IsaWorld Online 7.4/7.72 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Sweden, version hint: 7.72, server address: isaworld.online, port 7272, official website reachable during import, 6 replies, 883 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "IsaWorld Online 7.4/7.72 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://isaworld.online/",
    "Official website responded with HTTP 200",
    "Server address: isaworld.online",
    "Server port: 7272",
    "Thread author: calveron",
    "Original post date: 7/18/2026",
    "Forum discussion: 6 replies",
    "Thread visibility: 883 views",
    "Parsed version/client hint: 7.72",
    "Parsed region hint: Sweden"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Sweden",
    "7.72",
    "Sweden",
    "Real-Map",
    "2x",
    "Launch: 17/7"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://isaworld.online/",
      "label": "IsaWorld Online 7.4/7.72 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/sweden-real-map-2x-isaworld-online-7-4-7-72-launch-17-7.305010/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://isaworld.online/",
      "label": "https://isaworld.online/"
    }
  ],
  "faq_items": [
    {
      "question": "Is IsaWorld Online 7.4/7.72 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://isaworld.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm IsaWorld Online 7.4/7.72?",
      "answer": "Start with https://isaworld.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "IsaWorld Online 7.4/7.72 exposes https://isaworld.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function IsaworldOnline74772ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
