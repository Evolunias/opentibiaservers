import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-market');
}

export default function TibiaraMarketKeywordPage() {
  return <StaticKeywordPage slug="tibiara-market" />;
}
