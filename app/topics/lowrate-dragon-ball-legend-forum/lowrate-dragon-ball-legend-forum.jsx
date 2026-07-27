import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-forum');
}

export default function LowrateDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-forum" />;
}
