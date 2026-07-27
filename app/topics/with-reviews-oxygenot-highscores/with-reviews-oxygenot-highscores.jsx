import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-highscores');
}

export default function WithReviewsOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-highscores" />;
}
