import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-highscores');
}

export default function CustomOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-highscores" />;
}
