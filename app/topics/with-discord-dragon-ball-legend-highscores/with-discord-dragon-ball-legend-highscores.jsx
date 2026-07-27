import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-highscores');
}

export default function WithDiscordDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-highscores" />;
}
