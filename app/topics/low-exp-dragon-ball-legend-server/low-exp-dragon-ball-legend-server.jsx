import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-dragon-ball-legend-server');
}

export default function LowExpDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-dragon-ball-legend-server" />;
}
