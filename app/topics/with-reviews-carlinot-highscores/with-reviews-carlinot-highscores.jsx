import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-highscores');
}

export default function WithReviewsCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-highscores" />;
}
