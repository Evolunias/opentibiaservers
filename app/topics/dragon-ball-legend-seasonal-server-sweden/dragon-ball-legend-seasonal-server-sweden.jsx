import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-sweden');
}

export default function DragonBallLegendSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-sweden" />;
}
