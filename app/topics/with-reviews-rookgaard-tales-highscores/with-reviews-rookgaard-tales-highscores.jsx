import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-highscores');
}

export default function WithReviewsRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-highscores" />;
}
