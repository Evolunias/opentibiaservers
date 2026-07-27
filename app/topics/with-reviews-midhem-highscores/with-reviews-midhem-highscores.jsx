import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-highscores');
}

export default function WithReviewsMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-highscores" />;
}
