import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-fossil-early-alpha",
  "slug": "fossil-early-alpha",
  "name": "Fossil (early Alpha)",
  "host": "fossil-legacy.com",
  "ip": "fossil-legacy.com",
  "port": 7171,
  "location": "Sweden",
  "version": "7",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 26,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://fossil-legacy.com/",
  "external_launch_url": "https://fossil-legacy.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Fossil (early Alpha)",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2022-09-02T05:13:25+0200",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Fossil (early Alpha) enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Sweden, version hint: 7, server address: fossil-legacy.com, port 7171, official website reachable during import, 47 replies, 13,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Fossil (early Alpha) is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://fossil-legacy.com/",
    "Official website responded with HTTP 200",
    "Server address: fossil-legacy.com",
    "Server port: 7171",
    "Thread author: Peonso",
    "Original post date: 9/2/2022",
    "Forum discussion: 47 replies",
    "Thread visibility: 13,000 views",
    "Parsed version/client hint: 7",
    "Parsed region hint: Sweden"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Sweden",
    "7",
    "Sweden",
    "4.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://fossil-legacy.com/",
      "label": "Fossil (early Alpha) official website"
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
      "url": "https://fossil-legacy.com/",
      "label": "https://fossil-legacy.com/"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/Ob2zevq",
      "label": "https://imgur.com/Ob2zevq"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/a/zhjMVsk",
      "label": "https://imgur.com/a/zhjMVsk"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/a/VLK6p0C",
      "label": "https://imgur.com/a/VLK6p0C"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/tuqOPVW",
      "label": "https://imgur.com/tuqOPVW"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/bc037b290f0f5546600f0e64cd8b43c7",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Fossil (early Alpha) verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://fossil-legacy.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Fossil (early Alpha)?",
      "answer": "Start with https://fossil-legacy.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Fossil (early Alpha) exposes https://fossil-legacy.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/Ob2zevq, https://imgur.com/a/zhjMVsk, https://imgur.com/a/VLK6p0C, https://imgur.com/tuqOPVW. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function FossilEarlyAlphaPage() {
  return <CuratedGuideArticle page={page} />;
}
