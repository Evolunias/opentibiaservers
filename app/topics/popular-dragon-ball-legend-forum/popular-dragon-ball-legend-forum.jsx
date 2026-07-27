import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-forum');
}

export default function PopularDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-forum" />;
}
