import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-highscores');
}

export default function WithReviewsRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-highscores" />;
}
