import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-highscores');
}

export default function WithDiscordMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-highscores" />;
}
