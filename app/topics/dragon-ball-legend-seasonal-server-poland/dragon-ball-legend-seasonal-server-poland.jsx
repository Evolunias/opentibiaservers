import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-poland');
}

export default function DragonBallLegendSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-poland" />;
}
