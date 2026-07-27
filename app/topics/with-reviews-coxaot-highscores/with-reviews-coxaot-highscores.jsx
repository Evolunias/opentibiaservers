import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-highscores');
}

export default function WithReviewsCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-highscores" />;
}
