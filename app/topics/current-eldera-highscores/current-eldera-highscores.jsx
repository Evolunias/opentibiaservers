import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-highscores');
}

export default function CurrentElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-highscores" />;
}
