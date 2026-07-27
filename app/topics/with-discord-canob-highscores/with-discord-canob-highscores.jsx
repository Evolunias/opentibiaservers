import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-highscores');
}

export default function WithDiscordCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-highscores" />;
}
