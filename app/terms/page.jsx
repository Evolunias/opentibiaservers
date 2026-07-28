import LegalPage from '@/app/components/LegalPage';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

export const metadata = {
  title: `Terms and Conditions | ${getSiteName()}`,
  description: 'Terms and conditions for using OpenTibiaServers.com, including directory listings, community content, server claims, and source attribution.',
  alternates: { canonical: buildAbsoluteUrl('/terms') },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      eyebrow="Directory Terms"
      updatedAt="July 28, 2026"
      intro="These terms explain how OpenTibiaServers.com may be used by players, server owners, listing managers, and community contributors."
      sections={[
        {
          heading: 'Independent Directory',
          body: [
            'OpenTibiaServers.com is an independent Open Tibia server directory. We are not affiliated with, endorsed by, or sponsored by CipSoft GmbH, Tibia.com, OtLand, OTServlist, or any listed server unless explicitly stated.',
            'Tibia and related marks belong to their respective owners. References are used for community identification, search, comparison, historical context, and directory purposes.',
          ],
        },
        {
          heading: 'Listings and Source Data',
          body: [
            'Directory pages may include public server-list data, OtLand thread data, owner-submitted content, public official website details, uptime checks, screenshots, reviews, and community discussion.',
            'Public data can change quickly. Online count, uptime, rates, client versions, launch dates, and official links should be verified with the server owner or official source before downloading files, donating, or creating an account.',
          ],
        },
        {
          heading: 'Server Claims and Owner Content',
          body: [
            'Server owners and authorized managers may claim listings and request updates. We may ask for proof such as website control, DNS proof, official account proof, Discord moderation proof, or other reasonable verification.',
            'Owners are responsible for the accuracy of submitted descriptions, screenshots, links, rules, download pages, Discord links, contact information, and promotional claims.',
          ],
        },
        {
          heading: 'Community Content',
          body: [
            'Players may submit reviews, screenshots, comments, corrections, and community notes where features are available. Content must be relevant, lawful, non-abusive, and based on honest experience or verifiable information.',
            'We may remove spam, harassment, impersonation, malware links, deceptive claims, scraped private information, or content that harms the usefulness and safety of the directory.',
          ],
        },
        {
          heading: 'Downloads, Donations, and Third-Party Sites',
          body: [
            'OpenTibiaServers.com does not operate third-party Open Tibia servers and does not control their downloads, shops, account systems, Discords, or payment flows.',
            'Players should verify official sources before installing clients or making purchases. We are not responsible for third-party websites, server operations, account loss, server resets, donations, bans, or service interruptions.',
          ],
        },
        {
          heading: 'Changes',
          body: [
            'We may update these terms as the directory evolves. Continued use of the site after changes means you accept the updated terms.',
          ],
        },
      ]}
    />
  );
}
