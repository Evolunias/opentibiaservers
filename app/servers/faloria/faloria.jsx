import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-faloria",
  "slug": "faloria",
  "name": "Faloria",
  "host": "faloria.online",
  "ip": "faloria.online",
  "port": 7171,
  "location": "France",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 44,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-7-4-faloria-expedition-20th-feb-2026-20-00-cet.303921/",
  "source_url": "https://otland.net/threads/france-7-4-faloria-expedition-20th-feb-2026-20-00-cet.303921/",
  "website_url": "https://faloria.online",
  "external_launch_url": "https://faloria.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Faloria",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2026-02-14T10:06:29+0100",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "Faloria enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 7.4, server address: faloria.online, port 7171, official website reachable during import, 18 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Faloria is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://faloria.online",
    "Official website responded with HTTP 200",
    "Server address: faloria.online",
    "Server port: 7171",
    "Thread author: sirbowt",
    "Original post date: 2/14/2026",
    "Forum discussion: 18 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "7.4",
    "France",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://faloria.online",
      "label": "Faloria official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-7-4-faloria-expedition-20th-feb-2026-20-00-cet.303921/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://faloria.online",
      "label": "https://faloria.online"
    }
  ],
  "faq_items": [
    {
      "question": "Is Faloria verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://faloria.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Faloria?",
      "answer": "Start with https://faloria.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Faloria exposes https://faloria.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function FaloriaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
