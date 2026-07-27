import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-rules');
}

export default function PopularDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-rules" />;
}
