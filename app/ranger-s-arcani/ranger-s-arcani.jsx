import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-ranger-s-arcani",
  "slug": "ranger-s-arcani",
  "name": "Ranger's Arcani",
  "host": "ragame.ovh",
  "ip": "ragame.ovh",
  "port": 7171,
  "location": "Poland",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 23,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-custom-rangers-arcani-new-classes-items-keystones-spells-tree.299769/",
  "source_url": "https://otland.net/threads/poland-custom-rangers-arcani-new-classes-items-keystones-spells-tree.299769/",
  "website_url": "https://ragame.online/",
  "external_launch_url": "https://ragame.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Ranger's Arcani",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2025-10-03T18:12:56+0200",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "Ranger's Arcani enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8, server address: ragame.ovh, port 7171, official website reachable during import, 53 replies, 10,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Ranger's Arcani is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://ragame.online/",
    "Official website responded with HTTP 200",
    "Server address: ragame.ovh",
    "Server port: 7171",
    "Thread author: Oskar1121",
    "Original post date: 10/4/2025",
    "Forum discussion: 53 replies",
    "Thread visibility: 10,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8",
    "Poland",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://ragame.online/",
      "label": "Ranger's Arcani official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-custom-rangers-arcani-new-classes-items-keystones-spells-tree.299769/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://ragame.online/",
      "label": "https://ragame.online/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/fridaii",
      "label": "fridaii"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/fridai__",
      "label": "fridai__"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Wilku93",
      "label": "Wilku93"
    },
    {
      "type": "source_link",
      "url": "https://github.com/JakesFromBB",
      "label": "JakesFromBB"
    }
  ],
  "faq_items": [
    {
      "question": "Is Ranger's Arcani verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://ragame.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Ranger's Arcani?",
      "answer": "Start with https://ragame.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Ranger's Arcani exposes https://ragame.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function RangerSArcaniPage() {
  return <CuratedGuideArticle page={page} />;
}
