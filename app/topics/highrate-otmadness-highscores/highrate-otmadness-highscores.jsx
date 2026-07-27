import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-highscores');
}

export default function HighrateOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-highscores" />;
}
