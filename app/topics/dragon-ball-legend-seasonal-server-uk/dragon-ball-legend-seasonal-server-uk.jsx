import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-uk');
}

export default function DragonBallLegendSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-uk" />;
}
