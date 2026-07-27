import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-donations');
}

export default function NtoStarDonationsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-donations" />;
}
