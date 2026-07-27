import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-market');
}

export default function ArcaniarlMarketKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-market" />;
}
