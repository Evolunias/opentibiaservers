import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-highscores');
}

export default function ActiveOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-highscores" />;
}
