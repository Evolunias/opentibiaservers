import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-forum');
}

export default function NoResetDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-forum" />;
}
