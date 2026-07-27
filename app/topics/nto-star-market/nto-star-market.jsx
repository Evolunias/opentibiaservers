import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-market');
}

export default function NtoStarMarketKeywordPage() {
  return <StaticKeywordPage slug="nto-star-market" />;
}
