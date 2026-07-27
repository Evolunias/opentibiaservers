import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-highscores');
}

export default function WithReviewsDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-highscores" />;
}
