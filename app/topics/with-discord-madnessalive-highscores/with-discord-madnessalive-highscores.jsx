import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-highscores');
}

export default function WithDiscordMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-highscores" />;
}
