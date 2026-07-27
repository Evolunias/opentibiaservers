import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-highscores');
}

export default function WithReviewsNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-highscores" />;
}
