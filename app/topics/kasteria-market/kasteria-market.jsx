import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-market');
}

export default function KasteriaMarketKeywordPage() {
  return <StaticKeywordPage slug="kasteria-market" />;
}
