import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-highscores');
}

export default function WithDiscordClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-highscores" />;
}
