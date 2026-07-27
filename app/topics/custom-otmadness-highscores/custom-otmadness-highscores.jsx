import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-highscores');
}

export default function CustomOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-highscores" />;
}
