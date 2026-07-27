import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-highscores');
}

export default function WithReviewsRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-highscores" />;
}
