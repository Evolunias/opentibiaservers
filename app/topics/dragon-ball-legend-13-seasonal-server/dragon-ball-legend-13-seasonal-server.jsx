import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-seasonal-server');
}

export default function DragonBallLegend13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-seasonal-server" />;
}
