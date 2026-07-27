import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-brazil');
}

export default function TibianusWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-brazil" />;
}
