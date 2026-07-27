import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-highscores');
}

export default function WithReviewsClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-highscores" />;
}
