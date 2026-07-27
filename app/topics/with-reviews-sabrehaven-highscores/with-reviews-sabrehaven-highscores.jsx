import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-highscores');
}

export default function WithReviewsSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-highscores" />;
}
