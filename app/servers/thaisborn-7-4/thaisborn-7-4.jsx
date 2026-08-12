import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-thaisborn-7-4",
  "slug": "thaisborn-7-4",
  "name": "Thaisborn 7.4",
  "host": "thaisborn.net",
  "ip": "thaisborn.net",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 61,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-custom-thaisborn-7-4-classic-gameplay-with-custom-endgame.304348/",
  "source_url": "https://otland.net/threads/usa-custom-thaisborn-7-4-classic-gameplay-with-custom-endgame.304348/",
  "website_url": "https://thaisborn.net/",
  "external_launch_url": "https://thaisborn.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Thaisborn 7.4",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.691Z",
  "last_seen_at": "2026-04-11T19:30:07+0200",
  "last_check": "2026-07-28T02:51:25.691Z",
  "official_summary": "Thaisborn 7.4 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: thaisborn.net, port 7171, official website reachable during import, 5 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Thaisborn 7.4 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://thaisborn.net/",
    "Official website responded with HTTP 200",
    "Server address: thaisborn.net",
    "Server port: 7171",
    "Thread author: Komakusaki",
    "Original post date: 4/12/2026",
    "Forum discussion: 5 replies",
    "Thread visibility: 1,000 views",
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
      "url": "https://thaisborn.net/",
      "label": "Thaisborn 7.4 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-custom-thaisborn-7-4-classic-gameplay-with-custom-endgame.304348/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://thaisborn.net/",
      "label": "https://thaisborn.net/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Tinty_PL",
      "label": "Tinty_PL"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Jagged",
      "label": "Jagged"
    }
  ],
  "faq_items": [
    {
      "question": "Is Thaisborn 7.4 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://thaisborn.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Thaisborn 7.4?",
      "answer": "Start with https://thaisborn.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Thaisborn 7.4 exposes https://thaisborn.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Thaisborn74ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
