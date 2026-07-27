import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-ot-server');
}

export default function LowrateDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-ot-server" />;
}
