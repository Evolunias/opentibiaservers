import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-highscores');
}

export default function WithDiscordMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-highscores" />;
}
