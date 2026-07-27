import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-highscores');
}

export default function WithDiscordRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-highscores" />;
}
