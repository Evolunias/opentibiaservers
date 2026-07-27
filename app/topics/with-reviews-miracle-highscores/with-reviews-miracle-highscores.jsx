import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-highscores');
}

export default function WithReviewsMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-highscores" />;
}
