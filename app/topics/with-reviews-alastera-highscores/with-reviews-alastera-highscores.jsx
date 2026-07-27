import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-highscores');
}

export default function WithReviewsAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-highscores" />;
}
