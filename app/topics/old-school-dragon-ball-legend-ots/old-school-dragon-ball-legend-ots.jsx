import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-ots');
}

export default function OldSchoolDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-ots" />;
}
