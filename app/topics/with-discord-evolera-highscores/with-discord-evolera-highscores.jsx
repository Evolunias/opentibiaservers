import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-highscores');
}

export default function WithDiscordEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-highscores" />;
}
