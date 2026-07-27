import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-forum');
}

export default function CurrentDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-forum" />;
}
