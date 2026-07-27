import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-highscores');
}

export default function WithDiscordEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-highscores" />;
}
