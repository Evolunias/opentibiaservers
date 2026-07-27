import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-forum');
}

export default function NewSeasonDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-forum" />;
}
