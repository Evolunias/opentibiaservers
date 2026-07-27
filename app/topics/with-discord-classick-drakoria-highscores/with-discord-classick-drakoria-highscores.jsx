import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-highscores');
}

export default function WithDiscordClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-highscores" />;
}
