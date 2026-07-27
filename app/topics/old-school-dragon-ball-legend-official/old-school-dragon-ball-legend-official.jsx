import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-official');
}

export default function OldSchoolDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-official" />;
}
