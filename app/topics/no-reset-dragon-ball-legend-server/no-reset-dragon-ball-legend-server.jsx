import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-server');
}

export default function NoResetDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-server" />;
}
