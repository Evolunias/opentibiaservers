import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-highscores');
}

export default function TopOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-highscores" />;
}
