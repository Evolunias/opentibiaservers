import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-donations');
}

export default function SaintsotDonationsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-donations" />;
}
