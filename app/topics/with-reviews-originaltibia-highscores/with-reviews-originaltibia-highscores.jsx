import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-highscores');
}

export default function WithReviewsOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-highscores" />;
}
