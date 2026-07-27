import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-highscores');
}

export default function LowrateEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-highscores" />;
}
