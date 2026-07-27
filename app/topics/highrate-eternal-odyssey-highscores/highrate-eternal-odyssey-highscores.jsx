import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-highscores');
}

export default function HighrateEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-highscores" />;
}
