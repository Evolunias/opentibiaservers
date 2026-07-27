import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-highscores');
}

export default function WithReviewsMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-highscores" />;
}
