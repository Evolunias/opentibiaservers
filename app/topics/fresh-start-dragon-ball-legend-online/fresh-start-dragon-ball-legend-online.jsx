import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-online');
}

export default function FreshStartDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-online" />;
}
