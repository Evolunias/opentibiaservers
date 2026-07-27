import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-create-account');
}

export default function OldSchoolDragonBallLegendCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-create-account" />;
}
