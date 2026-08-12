import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-ironcore",
  "slug": "ironcore",
  "name": "Ironcore",
  "host": "ironco.re",
  "ip": "ironco.re",
  "port": 7171,
  "location": "Germany",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 25,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-custom-ironcore-the-true-ironman-experience.286791/",
  "source_url": "https://otland.net/threads/germany-custom-ironcore-the-true-ironman-experience.286791/",
  "website_url": "https://ironco.re/",
  "external_launch_url": "https://ironco.re/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Ironcore",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2023-10-31T00:55:13+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Ironcore enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8.0, server address: ironco.re, port 7171, official website reachable during import, 47 replies, 16,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Ironcore is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://ironco.re/",
    "Official website responded with HTTP 200",
    "Server address: ironco.re",
    "Server port: 7171",
    "Thread author: Sizaro",
    "Original post date: 10/31/2023",
    "Forum discussion: 47 replies",
    "Thread visibility: 16,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "8.0",
    "Germany",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://ironco.re/",
      "label": "Ironcore official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-custom-ironcore-the-true-ironman-experience.286791/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://ironco.re/",
      "label": "https://ironco.re/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/coldensjo",
      "label": "coldensjo"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/07121ec57a6308acc2346ac807c75e58",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/dabb236f88dbacafe856b7c324ba5dca",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/a34ac72449b6a740b65bbe926b0b4770",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/9843dc7098652034b55cb5b977896633",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Ironcore verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://ironco.re/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Ironcore?",
      "answer": "Start with https://ironco.re/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Ironcore exposes https://ironco.re/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function IroncorePage() {
  return <CuratedGuideArticle page={page} />;
}
