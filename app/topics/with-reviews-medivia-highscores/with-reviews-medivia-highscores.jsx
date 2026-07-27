import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-highscores');
}

export default function WithReviewsMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-highscores" />;
}
