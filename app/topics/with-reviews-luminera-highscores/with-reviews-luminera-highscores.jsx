import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-highscores');
}

export default function WithReviewsLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-highscores" />;
}
