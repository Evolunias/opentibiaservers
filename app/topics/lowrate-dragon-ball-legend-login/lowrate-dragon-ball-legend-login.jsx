import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-login');
}

export default function LowrateDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-login" />;
}
