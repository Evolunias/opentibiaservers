import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-highscores');
}

export default function CalmeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="calmera-highscores" />;
}
