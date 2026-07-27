import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-highscores');
}

export default function BestOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-highscores" />;
}
