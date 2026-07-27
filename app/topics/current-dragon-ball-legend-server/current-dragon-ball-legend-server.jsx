import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-server');
}

export default function CurrentDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-server" />;
}
