import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-rules');
}

export default function NewDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-rules" />;
}
