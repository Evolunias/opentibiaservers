import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-private-server');
}

export default function CurrentDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-private-server" />;
}
