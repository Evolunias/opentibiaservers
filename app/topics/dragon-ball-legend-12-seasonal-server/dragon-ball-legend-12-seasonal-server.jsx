import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-seasonal-server');
}

export default function DragonBallLegend12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-seasonal-server" />;
}
