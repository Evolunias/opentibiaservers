import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-highscores');
}

export default function BestAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-highscores" />;
}
