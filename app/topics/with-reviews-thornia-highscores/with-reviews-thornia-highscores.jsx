import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-highscores');
}

export default function WithReviewsThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-highscores" />;
}
