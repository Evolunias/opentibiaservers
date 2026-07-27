import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-no-reset-server');
}

export default function DragonBallLegend15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-no-reset-server" />;
}
