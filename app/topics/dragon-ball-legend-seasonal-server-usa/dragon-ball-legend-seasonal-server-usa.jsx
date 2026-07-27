import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-usa');
}

export default function DragonBallLegendSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-usa" />;
}
