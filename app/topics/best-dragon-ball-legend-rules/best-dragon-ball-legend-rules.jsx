import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-rules');
}

export default function BestDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-rules" />;
}
