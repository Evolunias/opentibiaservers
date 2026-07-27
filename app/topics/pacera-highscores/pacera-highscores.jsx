import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-highscores');
}

export default function PaceraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="pacera-highscores" />;
}
