import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-tibia-reborn",
  "slug": "tibia-reborn",
  "name": "Tibia Reborn",
  "host": "tibiareborn.net",
  "ip": "tibiareborn.net",
  "port": 7171,
  "location": "Germany",
  "version": "7.7",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 86,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-7-4-7-7-na-eu-proxies-tibia-reborn-launch-27-2-19-00-cet.303912/",
  "source_url": "https://otland.net/threads/germany-7-4-7-7-na-eu-proxies-tibia-reborn-launch-27-2-19-00-cet.303912/",
  "website_url": "https://tibiareborn.net",
  "external_launch_url": "https://tibiareborn.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Tibia Reborn",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.276Z",
  "last_seen_at": "2026-02-13T23:58:29+0100",
  "last_check": "2026-07-28T02:51:23.276Z",
  "official_summary": "Tibia Reborn enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 7.7, server address: tibiareborn.net, port 7171, 50 replies, 8,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Tibia Reborn is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://tibiareborn.net",
    "Server address: tibiareborn.net",
    "Server port: 7171",
    "Thread author: SnorkY",
    "Original post date: 2/14/2026",
    "Forum discussion: 50 replies",
    "Thread visibility: 8,000 views",
    "Parsed version/client hint: 7.7",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "7.7",
    "Germany",
    "7.4-7.7",
    "NA/EU Proxies"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://tibiareborn.net",
      "label": "Tibia Reborn official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-7-4-7-7-na-eu-proxies-tibia-reborn-launch-27-2-19-00-cet.303912/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://tibiareborn.net",
      "label": "https://tibiareborn.net"
    }
  ],
  "faq_items": [
    {
      "question": "Is Tibia Reborn verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://tibiareborn.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Tibia Reborn?",
      "answer": "Start with https://tibiareborn.net and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Tibia Reborn exposes https://tibiareborn.net from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function TibiaRebornPage() {
  return <CuratedGuideArticle page={page} />;
}
