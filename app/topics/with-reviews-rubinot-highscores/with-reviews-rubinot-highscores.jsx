import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-highscores');
}

export default function WithReviewsRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-highscores" />;
}
