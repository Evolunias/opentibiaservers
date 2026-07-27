import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-highscores');
}

export default function WithReviewsBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-highscores" />;
}
