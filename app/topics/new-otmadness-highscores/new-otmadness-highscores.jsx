import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-highscores');
}

export default function NewOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-highscores" />;
}
