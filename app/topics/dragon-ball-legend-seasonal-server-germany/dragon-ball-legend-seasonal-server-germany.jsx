import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-germany');
}

export default function DragonBallLegendSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-germany" />;
}
