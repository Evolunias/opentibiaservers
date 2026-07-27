import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-11-seasonal-server');
}

export default function DragonBallLegend11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-11-seasonal-server" />;
}
