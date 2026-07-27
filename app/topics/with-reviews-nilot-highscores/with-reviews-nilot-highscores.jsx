import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-highscores');
}

export default function WithReviewsNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-highscores" />;
}
