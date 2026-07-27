import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-highscores');
}

export default function CurrentOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-highscores" />;
}
