import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-highscores');
}

export default function WithReviewsNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-highscores" />;
}
