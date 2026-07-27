import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-highscores');
}

export default function WithDiscordMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-highscores" />;
}
