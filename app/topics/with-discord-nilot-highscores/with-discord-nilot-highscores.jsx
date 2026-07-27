import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-highscores');
}

export default function WithDiscordNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-highscores" />;
}
