import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-highscores');
}

export default function WithDiscordRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-highscores" />;
}
