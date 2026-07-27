import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-highscores');
}

export default function WithDiscordUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-highscores" />;
}
