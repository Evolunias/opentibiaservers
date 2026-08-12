import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-dragora-online-7-92-fresh-start-may-15",
  "slug": "dragora-online-7-92-fresh-start-may-15",
  "name": "Dragora Online 7.92 (Fresh Start May 15!)",
  "host": "dragora.online",
  "ip": "dragora.online",
  "port": 7171,
  "location": "USA",
  "version": "7.92",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 53,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-custom-dragora-online-7-92-fresh-start-may-15.304562/",
  "source_url": "https://otland.net/threads/usa-custom-dragora-online-7-92-fresh-start-may-15.304562/",
  "website_url": "https://dragora.online",
  "external_launch_url": "https://dragora.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Dragora Online 7.92 (Fresh Start May 15!)",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2026-05-14T00:54:33+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "Dragora Online 7.92 (Fresh Start May 15!) enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.92, server address: dragora.online, port 7171, official website reachable during import, 10 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Dragora Online 7.92 (Fresh Start May 15!) is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://dragora.online",
    "Official website responded with HTTP 200",
    "Server address: dragora.online",
    "Server port: 7171",
    "Thread author: Mtani",
    "Original post date: 5/14/2026",
    "Forum discussion: 10 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 7.92",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.92",
    "USA",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://dragora.online",
      "label": "Dragora Online 7.92 (Fresh Start May 15!) official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-custom-dragora-online-7-92-fresh-start-may-15.304562/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://dragora.online",
      "label": "https://dragora.online"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/025a592fcd8095cef588642a777f96c8",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Kuhicop",
      "label": "Kuhicop"
    }
  ],
  "faq_items": [
    {
      "question": "Is Dragora Online 7.92 (Fresh Start May 15!) verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://dragora.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Dragora Online 7.92 (Fresh Start May 15!)?",
      "answer": "Start with https://dragora.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Dragora Online 7.92 (Fresh Start May 15!) exposes https://dragora.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function DragoraOnline792FreshStartMay15Page() {
  return <CuratedGuideArticle page={page} />;
}
