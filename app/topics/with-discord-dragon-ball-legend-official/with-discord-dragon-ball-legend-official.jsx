import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-official');
}

export default function WithDiscordDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-official" />;
}
