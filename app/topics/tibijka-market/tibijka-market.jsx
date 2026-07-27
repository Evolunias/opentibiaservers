import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-market');
}

export default function TibijkaMarketKeywordPage() {
  return <StaticKeywordPage slug="tibijka-market" />;
}
