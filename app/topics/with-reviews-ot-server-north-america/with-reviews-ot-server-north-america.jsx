import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-north-america');
}

export default function WithReviewsOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-north-america" />;
}
