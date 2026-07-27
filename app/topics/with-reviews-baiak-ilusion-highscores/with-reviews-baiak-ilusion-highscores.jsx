import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-highscores');
}

export default function WithReviewsBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-highscores" />;
}
