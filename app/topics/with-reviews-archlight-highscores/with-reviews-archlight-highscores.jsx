import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-highscores');
}

export default function WithReviewsArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-highscores" />;
}
