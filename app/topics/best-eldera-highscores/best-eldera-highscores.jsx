import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-highscores');
}

export default function BestElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-highscores" />;
}
