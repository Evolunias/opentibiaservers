import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-forum');
}

export default function DragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-forum" />;
}
