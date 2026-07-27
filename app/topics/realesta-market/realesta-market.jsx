import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-market');
}

export default function RealestaMarketKeywordPage() {
  return <StaticKeywordPage slug="realesta-market" />;
}
