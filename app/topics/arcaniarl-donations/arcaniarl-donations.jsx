import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-donations');
}

export default function ArcaniarlDonationsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-donations" />;
}
