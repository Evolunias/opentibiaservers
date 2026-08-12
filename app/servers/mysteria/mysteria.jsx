import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-mysteria",
  "slug": "mysteria",
  "name": "Mysteria",
  "host": "mysteria74.com",
  "ip": "mysteria74.com",
  "port": 7171,
  "location": "US",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 43,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/us-7-4-mysteria.304712/",
  "source_url": "https://otland.net/threads/us-7-4-mysteria.304712/",
  "website_url": "https://mysteria74.com/",
  "external_launch_url": "https://mysteria74.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Mysteria",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2026-06-17T23:46:20+0200",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Mysteria enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: US, version hint: 7.4, server address: mysteria74.com, port 7171, official website reachable during import, 19 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Mysteria is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://mysteria74.com/",
    "Official website responded with HTTP 200",
    "Server address: mysteria74.com",
    "Server port: 7171",
    "Thread author: Mysteria74",
    "Original post date: 6/18/2026",
    "Forum discussion: 19 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: US"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "US",
    "7.4",
    "US",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://mysteria74.com/",
      "label": "Mysteria official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/us-7-4-mysteria.304712/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://mysteria74.com/",
      "label": "https://mysteria74.com/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Mysteria verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://mysteria74.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Mysteria?",
      "answer": "Start with https://mysteria74.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Mysteria exposes https://mysteria74.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function MysteriaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
