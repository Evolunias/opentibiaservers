import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend');
}

export default function LowrateDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend" />;
}
