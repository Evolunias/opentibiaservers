import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-highscores');
}

export default function NewOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-highscores" />;
}
