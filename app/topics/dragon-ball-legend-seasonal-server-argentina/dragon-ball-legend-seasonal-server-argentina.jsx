import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-argentina');
}

export default function DragonBallLegendSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-argentina" />;
}
