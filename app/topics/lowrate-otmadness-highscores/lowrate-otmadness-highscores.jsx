import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-highscores');
}

export default function LowrateOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-highscores" />;
}
