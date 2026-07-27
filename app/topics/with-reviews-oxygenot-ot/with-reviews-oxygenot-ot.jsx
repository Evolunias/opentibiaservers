import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-ot');
}

export default function WithReviewsOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-ot" />;
}
