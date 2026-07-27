import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-highscores');
}

export default function FreshStartOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-highscores" />;
}
