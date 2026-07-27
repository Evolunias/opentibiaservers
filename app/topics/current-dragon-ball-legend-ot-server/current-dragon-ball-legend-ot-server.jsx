import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-ot-server');
}

export default function CurrentDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-ot-server" />;
}
