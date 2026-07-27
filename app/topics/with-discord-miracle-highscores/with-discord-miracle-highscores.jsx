import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-highscores');
}

export default function WithDiscordMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-highscores" />;
}
