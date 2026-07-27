import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-rules');
}

export default function ActiveDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-rules" />;
}
