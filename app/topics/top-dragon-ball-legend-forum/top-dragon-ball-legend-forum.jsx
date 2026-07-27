import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-forum');
}

export default function TopDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-forum" />;
}
