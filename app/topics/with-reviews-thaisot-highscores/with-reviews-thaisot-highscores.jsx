import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-highscores');
}

export default function WithReviewsThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-highscores" />;
}
