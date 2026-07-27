import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-highscores');
}

export default function BestBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-highscores" />;
}
