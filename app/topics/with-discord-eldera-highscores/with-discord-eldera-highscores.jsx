import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-highscores');
}

export default function WithDiscordElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-highscores" />;
}
