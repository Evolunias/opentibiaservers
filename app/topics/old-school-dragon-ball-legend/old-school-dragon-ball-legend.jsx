import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend');
}

export default function OldSchoolDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend" />;
}
