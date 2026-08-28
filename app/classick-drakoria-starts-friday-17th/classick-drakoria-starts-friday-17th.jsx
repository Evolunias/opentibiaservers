import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-classick-drakoria-starts-friday-17th",
  "slug": "classick-drakoria-starts-friday-17th",
  "name": "Classick Drakoria Starts Friday 17th",
  "host": "drakoria80.online",
  "ip": "drakoria80.online",
  "port": 7676,
  "location": "USA",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 51,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://drakoria80.online",
  "external_launch_url": "https://drakoria80.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Classick Drakoria Starts Friday 17th",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:23.281Z",
  "last_seen_at": "2026-07-10T19:14:46+0200",
  "last_check": "2026-07-28T02:51:23.281Z",
  "official_summary": "Classick Drakoria Starts Friday 17th enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 8.0, server address: drakoria80.online, port 7676, official website reachable during import, 10 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Classick Drakoria Starts Friday 17th is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://drakoria80.online",
    "Official website responded with HTTP 200",
    "Server address: drakoria80.online",
    "Server port: 7676",
    "Thread author: Hookah",
    "Original post date: 7/11/2026",
    "Forum discussion: 10 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "8.0",
    "USA",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://drakoria80.online",
      "label": "Classick Drakoria Starts Friday 17th official website"
    },
    {
      "type": "community_forum",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive thread"
    },
    {
      "type": "forum_index",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive forum"
    },
    {
      "type": "source_link",
      "url": "https://drakoria80.online",
      "label": "https://drakoria80.online"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/70c8f17f51862d6cf0c52d9c0b532f4a",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Classick Drakoria Starts Friday 17th verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://drakoria80.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Classick Drakoria Starts Friday 17th?",
      "answer": "Start with https://drakoria80.online and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Classick Drakoria Starts Friday 17th exposes https://drakoria80.online from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this community_archive source matters",
      "body": "community_archive server launch archive is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
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

export default function ClassickDrakoriaStartsFriday17thPage() {
  return <CuratedGuideArticle page={page} />;
}
