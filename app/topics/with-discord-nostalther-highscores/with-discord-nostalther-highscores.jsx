import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-highscores');
}

export default function WithDiscordNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-highscores" />;
}
