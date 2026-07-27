import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-forum');
}

export default function HighrateDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-forum" />;
}
