import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-forum');
}

export default function OldSchoolDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-forum" />;
}
