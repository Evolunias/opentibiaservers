import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-highscores');
}

export default function WithDiscordOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-highscores" />;
}
