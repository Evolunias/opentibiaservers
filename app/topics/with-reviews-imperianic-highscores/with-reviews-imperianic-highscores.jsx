import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-highscores');
}

export default function WithReviewsImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-highscores" />;
}
