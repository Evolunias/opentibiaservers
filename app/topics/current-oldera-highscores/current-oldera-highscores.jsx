import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-highscores');
}

export default function CurrentOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-highscores" />;
}
