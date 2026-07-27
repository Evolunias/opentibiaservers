import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-highscores');
}

export default function WithDiscordTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-highscores" />;
}
