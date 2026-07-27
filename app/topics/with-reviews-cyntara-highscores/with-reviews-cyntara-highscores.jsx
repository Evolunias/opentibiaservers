import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-highscores');
}

export default function WithReviewsCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-highscores" />;
}
