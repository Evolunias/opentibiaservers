import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-forum');
}

export default function FreshStartDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-forum" />;
}
