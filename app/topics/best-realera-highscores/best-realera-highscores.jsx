import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-highscores');
}

export default function BestRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-realera-highscores" />;
}
