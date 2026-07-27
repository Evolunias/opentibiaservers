import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-open-tibia');
}

export default function PopularDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-open-tibia" />;
}
