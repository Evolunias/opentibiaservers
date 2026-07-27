import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-highscores');
}

export default function WithReviewsMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-highscores" />;
}
