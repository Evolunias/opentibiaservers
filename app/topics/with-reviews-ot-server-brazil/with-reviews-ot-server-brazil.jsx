import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-brazil');
}

export default function WithReviewsOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-brazil" />;
}
