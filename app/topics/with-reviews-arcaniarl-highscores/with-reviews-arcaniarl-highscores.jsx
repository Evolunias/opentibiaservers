import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-highscores');
}

export default function WithReviewsArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-highscores" />;
}
