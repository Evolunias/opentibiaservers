import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-highscores');
}

export default function FideraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fidera-highscores" />;
}
