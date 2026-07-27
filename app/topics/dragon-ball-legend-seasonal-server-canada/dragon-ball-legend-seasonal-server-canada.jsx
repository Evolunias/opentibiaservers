import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-canada');
}

export default function DragonBallLegendSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-canada" />;
}
