import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-highscores');
}

export default function PopularOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-highscores" />;
}
