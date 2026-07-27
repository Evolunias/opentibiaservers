import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-online');
}

export default function NewSeasonDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-online" />;
}
