import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-discord-server-france');
}

export default function DragonBallLegendWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-discord-server-france" />;
}
