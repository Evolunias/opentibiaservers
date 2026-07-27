import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-highscores');
}

export default function OlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="oldera-highscores" />;
}
