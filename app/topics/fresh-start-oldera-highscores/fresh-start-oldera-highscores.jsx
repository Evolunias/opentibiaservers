import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-highscores');
}

export default function FreshStartOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-highscores" />;
}
