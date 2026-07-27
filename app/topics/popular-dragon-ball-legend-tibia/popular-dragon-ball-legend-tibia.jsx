import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-tibia');
}

export default function PopularDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-tibia" />;
}
