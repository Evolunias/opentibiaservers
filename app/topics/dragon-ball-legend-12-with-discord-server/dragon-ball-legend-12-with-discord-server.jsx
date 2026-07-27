import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-with-discord-server');
}

export default function DragonBallLegend12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-with-discord-server" />;
}
