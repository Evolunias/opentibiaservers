import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-highscores');
}

export default function WithDiscordBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-highscores" />;
}
