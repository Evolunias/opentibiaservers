import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-guilds');
}

export default function DragonBallLegendGuildsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-guilds" />;
}
