import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-donations');
}

export default function CanobDonationsKeywordPage() {
  return <StaticKeywordPage slug="canob-donations" />;
}
