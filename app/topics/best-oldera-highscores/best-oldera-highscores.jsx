import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-highscores');
}

export default function BestOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-highscores" />;
}
