import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-dragon-ball-legend-server');
}

export default function SeasonalDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-dragon-ball-legend-server" />;
}
