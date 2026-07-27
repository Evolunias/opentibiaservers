import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-rules');
}

export default function OldSchoolDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-rules" />;
}
