import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-evolera-999x",
  "slug": "evolera-999x",
  "name": "Evolera| 999x",
  "host": "login.evolera.live",
  "ip": "login.evolera.live",
  "port": 7201,
  "location": "Germany",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 81,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://evolera.live/",
  "external_launch_url": "https://evolera.live/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Evolera| 999x",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.161Z",
  "last_seen_at": "2026-03-10T07:46:01+0100",
  "last_check": "2026-07-28T02:51:25.161Z",
  "official_summary": "Evolera| 999x enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8.6, server address: login.evolera.live, port 7201, 66 replies, 7,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Evolera| 999x is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://evolera.live/",
    "Server address: login.evolera.live",
    "Server port: 7201",
    "Thread author: devimake",
    "Original post date: 3/10/2026",
    "Forum discussion: 66 replies",
    "Thread visibility: 7,000 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Germany",
    "8.6",
    "Germany",
    "8.60"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://evolera.live/",
      "label": "Evolera| 999x official website"
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
      "url": "https://evolera.live/",
      "label": "https://evolera.live/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/742a917131d0b559d513da8bee2f6807",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/8def879323be0596f63fd263d7b46881",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Evolera| 999x verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://evolera.live/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Evolera| 999x?",
      "answer": "Start with https://evolera.live/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Evolera| 999x exposes https://evolera.live/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Evolera999xPage() {
  return <CuratedGuideArticle page={page} />;
}
