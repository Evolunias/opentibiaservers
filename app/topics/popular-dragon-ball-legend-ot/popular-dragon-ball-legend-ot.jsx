import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-ot');
}

export default function PopularDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-ot" />;
}
