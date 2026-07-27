import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-highscores');
}

export default function WithDiscordThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-highscores" />;
}
