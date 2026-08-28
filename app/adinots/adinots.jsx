import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-adinots",
  "slug": "adinots",
  "name": "AdinOTS",
  "host": "play.adinots.pl",
  "ip": "play.adinots.pl",
  "port": 7171,
  "location": "POLAND",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 36,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://adinots.pl/",
  "external_launch_url": "https://adinots.pl/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "AdinOTS",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2025-07-11T16:28:54+0200",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "AdinOTS enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 8.6, server address: play.adinots.pl, port 7171, official website reachable during import, 25 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "AdinOTS is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://adinots.pl/",
    "Official website responded with HTTP 200",
    "Server address: play.adinots.pl",
    "Server port: 7171",
    "Thread author: Adinots.pl",
    "Original post date: 7/11/2025",
    "Forum discussion: 25 replies",
    "Thread visibility: 5,000 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "POLAND",
    "8.6",
    "POLAND",
    "8.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://adinots.pl/",
      "label": "AdinOTS official website"
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
      "url": "https://adinots.pl/",
      "label": "https://adinots.pl/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/9aa822b2d031504de439ebd6ee1c9d29",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is AdinOTS verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://adinots.pl/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm AdinOTS?",
      "answer": "Start with https://adinots.pl/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "AdinOTS exposes https://adinots.pl/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function AdinotsPage() {
  return <CuratedGuideArticle page={page} />;
}
