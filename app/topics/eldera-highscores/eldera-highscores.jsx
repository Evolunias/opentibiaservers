import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-highscores');
}

export default function ElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="eldera-highscores" />;
}
