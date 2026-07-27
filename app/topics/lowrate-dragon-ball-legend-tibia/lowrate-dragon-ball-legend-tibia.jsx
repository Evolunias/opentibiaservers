import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-tibia');
}

export default function LowrateDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-tibia" />;
}
