import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-seasonal-server');
}

export default function DragonBallLegend15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-seasonal-server" />;
}
