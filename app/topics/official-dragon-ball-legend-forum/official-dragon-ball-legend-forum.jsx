import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-forum');
}

export default function OfficialDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-forum" />;
}
