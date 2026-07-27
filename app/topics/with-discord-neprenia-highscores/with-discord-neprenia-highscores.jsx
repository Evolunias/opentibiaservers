import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-highscores');
}

export default function WithDiscordNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-highscores" />;
}
