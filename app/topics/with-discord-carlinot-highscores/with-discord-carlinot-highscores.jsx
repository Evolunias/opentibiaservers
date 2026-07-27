import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-highscores');
}

export default function WithDiscordCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-highscores" />;
}
