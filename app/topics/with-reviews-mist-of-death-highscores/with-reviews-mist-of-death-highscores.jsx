import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-highscores');
}

export default function WithReviewsMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-highscores" />;
}
