import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-highscores');
}

export default function TopOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-highscores" />;
}
