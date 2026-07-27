import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-market');
}

export default function RubinotMarketKeywordPage() {
  return <StaticKeywordPage slug="rubinot-market" />;
}
