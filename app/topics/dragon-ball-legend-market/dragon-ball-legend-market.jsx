import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-market');
}

export default function DragonBallLegendMarketKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-market" />;
}
