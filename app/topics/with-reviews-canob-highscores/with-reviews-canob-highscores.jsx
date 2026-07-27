import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-highscores');
}

export default function WithReviewsCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-highscores" />;
}
