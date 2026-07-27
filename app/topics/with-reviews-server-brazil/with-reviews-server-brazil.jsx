import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-brazil');
}

export default function WithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-brazil" />;
}
