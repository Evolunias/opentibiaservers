import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-return-of-the-saiyans",
  "slug": "return-of-the-saiyans",
  "name": "Return of the Saiyans",
  "host": "saiyansreturn.com",
  "ip": "saiyansreturn.com",
  "port": 1001,
  "location": "Canada",
  "version": "7",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 77,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://saiyansreturn.com/",
  "external_launch_url": "https://saiyansreturn.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Return of the Saiyans",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2020-01-01T20:00:29+0100",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "Return of the Saiyans enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 7, server address: saiyansreturn.com, port 1001, 104 replies, 29,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Return of the Saiyans is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://saiyansreturn.com/",
    "Server address: saiyansreturn.com",
    "Server port: 1001",
    "Thread author: ROTS",
    "Original post date: 1/2/2020",
    "Forum discussion: 104 replies",
    "Thread visibility: 29,000 views",
    "Parsed version/client hint: 7",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Canada",
    "7",
    "Canada",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://saiyansreturn.com/",
      "label": "Return of the Saiyans official website"
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
      "url": "https://saiyansreturn.com/",
      "label": "https://saiyansreturn.com/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Return of the Saiyans verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://saiyansreturn.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Return of the Saiyans?",
      "answer": "Start with https://saiyansreturn.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Return of the Saiyans exposes https://saiyansreturn.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ReturnOfTheSaiyansPage() {
  return <CuratedGuideArticle page={page} />;
}
