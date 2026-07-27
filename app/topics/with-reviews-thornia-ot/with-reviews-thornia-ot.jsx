import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-ot');
}

export default function WithReviewsThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-ot" />;
}
