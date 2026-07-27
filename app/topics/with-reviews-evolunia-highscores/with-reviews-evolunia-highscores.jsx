import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-highscores');
}

export default function WithReviewsEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-highscores" />;
}
