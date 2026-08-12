import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-rafidea-v5",
  "slug": "rafidea-v5",
  "name": "Rafidea V5",
  "host": "rafidea.pl",
  "ip": "rafidea.pl",
  "port": 7171,
  "location": "Poland",
  "version": "8.00",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 99,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-8-00-rafidea-v5-custom-map-excellent-items-magic-alchemy-starts-at-saturday-13th-december-at-18-00-cet.302938/",
  "source_url": "https://otland.net/threads/poland-8-00-rafidea-v5-custom-map-excellent-items-magic-alchemy-starts-at-saturday-13th-december-at-18-00-cet.302938/",
  "website_url": "https://www.rafidea.pl/",
  "external_launch_url": "https://www.rafidea.pl/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Rafidea V5",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2025-12-08T10:29:40+0100",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "Rafidea V5 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8.00, server address: rafidea.pl, port 7171, 16 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Rafidea V5 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://www.rafidea.pl/",
    "Server address: rafidea.pl",
    "Server port: 7171",
    "Thread author: rlx",
    "Original post date: 12/8/2025",
    "Forum discussion: 16 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 8.00",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8.00",
    "Poland",
    "8.00",
    "Custom Map",
    "Excellent Items",
    "Magic Alchemy"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.rafidea.pl/",
      "label": "Rafidea V5 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-8-00-rafidea-v5-custom-map-excellent-items-magic-alchemy-starts-at-saturday-13th-december-at-18-00-cet.302938/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://www.rafidea.pl/",
      "label": "https://www.rafidea.pl/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/01e693843314168041068a9bb52ded41",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/1fba740f741e427036b88cd59b374a1b",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/760d7fcd27e6ab0412742fe7b6d24d53",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/9acc195379f6c579e6e884a958ffae3b",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/14ff68f646cbcaaa41fb098448e99cb2",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Rafidea V5 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://www.rafidea.pl/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Rafidea V5?",
      "answer": "Start with https://www.rafidea.pl/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Rafidea V5 exposes https://www.rafidea.pl/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function RafideaV5ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
