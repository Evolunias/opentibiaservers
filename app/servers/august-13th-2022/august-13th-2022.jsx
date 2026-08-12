import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-august-13th-2022",
  "slug": "august-13th-2022",
  "name": "August 13th 2022",
  "host": "abaldar.archlightonline.com",
  "ip": "abaldar.archlightonline.com",
  "port": 7171,
  "location": "United States",
  "version": "12",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 14,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/united-states-custom-august-13th-2022-new-fresh-start-world-abaldar-archlightonline.278847/",
  "source_url": "https://otland.net/threads/united-states-custom-august-13th-2022-new-fresh-start-world-abaldar-archlightonline.278847/",
  "website_url": "https://abaldar.archlightonline.com",
  "external_launch_url": "https://abaldar.archlightonline.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "August 13th 2022",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2021-11-26T18:36:04+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "August 13th 2022 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: United States, version hint: 12, server address: abaldar.archlightonline.com, port 7171, official website reachable during import, 120 replies, 25,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "August 13th 2022 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://abaldar.archlightonline.com",
    "Official website responded with HTTP 200",
    "Server address: abaldar.archlightonline.com",
    "Server port: 7171",
    "Thread author: Deleted member 49793",
    "Original post date: 11/27/2021",
    "Forum discussion: 120 replies",
    "Thread visibility: 25,000 views",
    "Parsed version/client hint: 12",
    "Parsed region hint: United States"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "United States",
    "12",
    "United States",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://abaldar.archlightonline.com",
      "label": "August 13th 2022 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/united-states-custom-august-13th-2022-new-fresh-start-world-abaldar-archlightonline.278847/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://abaldar.archlightonline.com",
      "label": "https://abaldar.archlightonline.com"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Fluffydrakoz",
      "label": "Fluffydrakoz"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/a8bb408666b067ff556eed2b7b21ef7b",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Oen44",
      "label": "Oen44"
    }
  ],
  "faq_items": [
    {
      "question": "Is August 13th 2022 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://abaldar.archlightonline.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm August 13th 2022?",
      "answer": "Start with https://abaldar.archlightonline.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "August 13th 2022 exposes https://abaldar.archlightonline.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function August13th2022ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
