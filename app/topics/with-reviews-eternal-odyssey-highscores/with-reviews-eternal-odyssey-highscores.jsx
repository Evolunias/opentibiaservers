import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eternal-odyssey-highscores');
}

export default function WithReviewsEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eternal-odyssey-highscores" />;
}
