import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-tibia');
}

export default function BestDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-tibia" />;
}
