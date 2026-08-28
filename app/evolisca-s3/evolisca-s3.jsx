import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-evolisca-s3",
  "slug": "evolisca-s3",
  "name": "Evolisca S3",
  "host": "evolisca.com",
  "ip": "evolisca.com",
  "port": 7171,
  "location": "Germany",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 75,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://evolisca.com",
  "external_launch_url": "https://evolisca.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Evolisca S3",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2023-12-13T23:39:12+0100",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Evolisca S3 enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8, server address: evolisca.com, port 7171, 153 replies, 29,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Evolisca S3 is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://evolisca.com",
    "Server address: evolisca.com",
    "Server port: 7171",
    "Thread author: Aboamen",
    "Original post date: 12/14/2023",
    "Forum discussion: 153 replies",
    "Thread visibility: 29,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Germany",
    "8",
    "Germany",
    "Custom",
    "Official Release"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://evolisca.com",
      "label": "Evolisca S3 official website"
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
      "url": "https://evolisca.com",
      "label": "https://evolisca.com"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Naeksu",
      "label": "Naeksu"
    }
  ],
  "faq_items": [
    {
      "question": "Is Evolisca S3 verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://evolisca.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Evolisca S3?",
      "answer": "Start with https://evolisca.com and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Evolisca S3 exposes https://evolisca.com from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function EvoliscaS3Page() {
  return <CuratedGuideArticle page={page} />;
}
