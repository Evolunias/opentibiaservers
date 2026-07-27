import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-forum');
}

export default function ActiveDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-forum" />;
}
