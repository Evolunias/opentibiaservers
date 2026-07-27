import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-market');
}

export default function TibiameMarketKeywordPage() {
  return <StaticKeywordPage slug="tibiame-market" />;
}
