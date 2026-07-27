import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-north-america');
}

export default function DragonBallLegendSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-north-america" />;
}
