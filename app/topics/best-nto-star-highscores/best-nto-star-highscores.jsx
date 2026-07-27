import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-highscores');
}

export default function BestNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-highscores" />;
}
