import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-usa');
}

export default function WithReviewsOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-usa" />;
}
