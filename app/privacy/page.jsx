import LegalPage from '@/app/components/LegalPage';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

export const metadata = {
  title: `Privacy Policy | ${getSiteName()}`,
  description: 'Privacy policy for OpenTibiaServers.com, covering accounts, server claims, community content, public listings, analytics, and contact requests.',
  alternates: { canonical: buildAbsoluteUrl('/privacy') },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="Privacy"
      updatedAt="July 28, 2026"
      intro="This policy describes the information OpenTibiaServers.com uses to run the directory, account features, listing claims, community tools, and contact workflows."
      sections={[
        {
          heading: 'Information We Collect',
          body: [
            'We may collect account information such as email address, authentication identifiers, display name, server claims, submitted listings, reviews, comments, screenshots, contact messages, and owner verification details.',
            'We also process public server information from sources such as server-list pages, OtLand threads, official server websites, public Discord/server pages, uptime checks, and owner-submitted details.',
          ],
        },
        {
          heading: 'How We Use Information',
          body: [
            'We use information to display server listings, power search and filters, verify claims, prevent abuse, respond to contact requests, improve page quality, maintain source attribution, and help players compare Open Tibia servers safely.',
            'Public listing and community contributions may appear on dedicated server profiles, topic pages, sitemap entries, and public discovery surfaces.',
          ],
        },
        {
          heading: 'Public Content',
          body: [
            'Reviews, screenshots, listing edits, forum-style posts, and claimable server details may be public if submitted through public site features.',
            'Do not submit private personal information, private emails, private Discord identifiers, access tokens, or data you do not have permission to share.',
          ],
        },
        {
          heading: 'Service Providers',
          body: [
            'The site may use hosting, database, authentication, monitoring, analytics, crawling, and email/contact providers to operate the directory.',
            'Those providers process data only as needed to provide the underlying service or comply with legal and security obligations.',
          ],
        },
        {
          heading: 'Retention and Corrections',
          body: [
            'We keep directory and account data for as long as needed to operate the service, preserve source-backed records, resolve disputes, or comply with legal obligations.',
            'Server owners and users may request corrections, listing updates, or removal review through the contact page.',
          ],
        },
        {
          heading: 'Security',
          body: [
            'We use reasonable technical and organizational safeguards. No internet service can guarantee perfect security, so users should avoid submitting sensitive secrets or private credentials through public forms.',
          ],
        },
      ]}
    />
  );
}
