import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-highscores');
}

export default function WithReviewsDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-highscores" />;
}
