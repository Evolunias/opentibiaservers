import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-market');
}

export default function RealeraMarketKeywordPage() {
  return <StaticKeywordPage slug="realera-market" />;
}
