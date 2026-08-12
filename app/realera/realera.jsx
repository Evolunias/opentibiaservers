import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-realera",
  "slug": "realera",
  "name": "Realera",
  "host": "realera.org",
  "ip": "realera.org",
  "port": 7290,
  "location": "USA",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 70,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-8-0-custom-realera-arcentis-october-16-2025-at-20-00-cet-brazil-15-00-brt-new-world-new-updates.271868/",
  "source_url": "https://otland.net/threads/usa-8-0-custom-realera-arcentis-october-16-2025-at-20-00-cet-brazil-15-00-brt-new-world-new-updates.271868/",
  "website_url": "https://realera.org",
  "external_launch_url": "https://realera.org",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Realera",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2020-07-24T22:33:33+0200",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Realera enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 8.0, server address: realera.org, port 7290, 276 replies, 100,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Realera is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://realera.org",
    "Server address: realera.org",
    "Server port: 7290",
    "Thread author: ruth",
    "Original post date: 7/25/2020",
    "Forum discussion: 276 replies",
    "Thread visibility: 100,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "8.0",
    "USA",
    "8.0 / Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://realera.org",
      "label": "Realera official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-8-0-custom-realera-arcentis-october-16-2025-at-20-00-cet-brazil-15-00-brt-new-world-new-updates.271868/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://realera.org",
      "label": "https://realera.org"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/325f7d99b24982075597090d38d641df",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Realera verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://realera.org as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Realera?",
      "answer": "Start with https://realera.org and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Realera exposes https://realera.org from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function RealeraPage() {
  return <CuratedGuideArticle page={page} />;
}
