import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-online');
}

export default function WithDiscordDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-online" />;
}
