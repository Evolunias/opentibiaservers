import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-highscores');
}

export default function WithReviewsShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-highscores" />;
}
