import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-open-tibia');
}

export default function CurrentDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-open-tibia" />;
}
