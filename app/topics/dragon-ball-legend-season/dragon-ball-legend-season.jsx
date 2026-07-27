import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-season');
}

export default function DragonBallLegendSeasonKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-season" />;
}
