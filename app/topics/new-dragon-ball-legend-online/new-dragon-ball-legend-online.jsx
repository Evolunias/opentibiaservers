import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-online');
}

export default function NewDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-online" />;
}
