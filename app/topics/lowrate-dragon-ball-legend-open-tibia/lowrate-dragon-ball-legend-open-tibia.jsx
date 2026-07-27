import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-open-tibia');
}

export default function LowrateDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-open-tibia" />;
}
