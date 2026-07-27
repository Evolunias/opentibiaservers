import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-highscores');
}

export default function WithDiscordMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-highscores" />;
}
