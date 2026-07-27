import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-donations');
}

export default function ThaisotDonationsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-donations" />;
}
