import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-highscores');
}

export default function WithDiscordThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-highscores" />;
}
