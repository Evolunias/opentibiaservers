import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-market');
}

export default function CanobMarketKeywordPage() {
  return <StaticKeywordPage slug="canob-market" />;
}
