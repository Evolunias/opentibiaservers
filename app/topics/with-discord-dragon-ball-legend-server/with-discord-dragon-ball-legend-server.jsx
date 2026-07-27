import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-server');
}

export default function WithDiscordDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-server" />;
}
