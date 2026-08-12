import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-mythera-7-4",
  "slug": "mythera-7-4",
  "name": "Mythera 7.4",
  "host": "mythera74.com",
  "ip": "mythera74.com",
  "port": 7171,
  "location": "United States",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 55,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/united-states-7-4-mythera-7-4-1x-long-term-launch-june-5.304663/",
  "source_url": "https://otland.net/threads/united-states-7-4-mythera-7-4-1x-long-term-launch-june-5.304663/",
  "website_url": "https://mythera74.com/",
  "external_launch_url": "https://mythera74.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Mythera 7.4",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2026-06-01T21:13:09+0200",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "Mythera 7.4 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: United States, version hint: 7.4, server address: mythera74.com, port 7171, official website reachable during import, 8 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Mythera 7.4 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://mythera74.com/",
    "Official website responded with HTTP 200",
    "Server address: mythera74.com",
    "Server port: 7171",
    "Thread author: Mythera Art",
    "Original post date: 6/2/2026",
    "Forum discussion: 8 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: United States"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "United States",
    "7.4",
    "United States",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://mythera74.com/",
      "label": "Mythera 7.4 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/united-states-7-4-mythera-7-4-1x-long-term-launch-june-5.304663/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://mythera74.com/",
      "label": "https://mythera74.com/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/cf73896d3d7e4e90f0eb54a7043db83f",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/f3b80ad949499d0eb6baa5fc65cf550c",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Mythera 7.4 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://mythera74.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Mythera 7.4?",
      "answer": "Start with https://mythera74.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Mythera 7.4 exposes https://mythera74.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Mythera74ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
