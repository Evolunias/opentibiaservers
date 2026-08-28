import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-cyntara-highrate",
  "slug": "cyntara-highrate",
  "name": "⭐ Cyntara Highrate ⭐",
  "host": "Cyntara.org",
  "ip": "Cyntara.org",
  "port": 7171,
  "location": "USA",
  "version": "15",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 5,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://cyntara.org/ref/community_archive",
  "external_launch_url": "https://cyntara.org/ref/community_archive",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "⭐ Cyntara Highrate ⭐",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2016-07-13T21:38:50+0200",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "⭐ Cyntara Highrate ⭐ enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 15, server address: Cyntara.org, port 7171, official website reachable during import, 313 replies, 368,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "⭐ Cyntara Highrate ⭐ is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://cyntara.org/ref/community_archive",
    "Official website responded with HTTP 200",
    "Server address: Cyntara.org",
    "Server port: 7171",
    "Thread author: Red",
    "Original post date: 7/14/2016",
    "Forum discussion: 313 replies",
    "Thread visibility: 368,000 views",
    "Parsed version/client hint: 15",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "15",
    "USA",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://cyntara.org/ref/community_archive",
      "label": "⭐ Cyntara Highrate ⭐ official website"
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
      "url": "https://cyntara.org/ref/community_archive",
      "label": "https://cyntara.org/ref/community_archive"
    }
  ],
  "faq_items": [
    {
      "question": "Is ⭐ Cyntara Highrate ⭐ verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://cyntara.org/ref/community_archive as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm ⭐ Cyntara Highrate ⭐?",
      "answer": "Start with https://cyntara.org/ref/community_archive and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "⭐ Cyntara Highrate ⭐ exposes https://cyntara.org/ref/community_archive from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function CyntaraHighratePage() {
  return <CuratedGuideArticle page={page} />;
}
