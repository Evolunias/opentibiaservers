import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-tibia');
}

export default function CurrentDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-tibia" />;
}
