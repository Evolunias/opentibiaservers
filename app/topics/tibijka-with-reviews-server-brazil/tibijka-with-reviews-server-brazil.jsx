import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-brazil');
}

export default function TibijkaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-brazil" />;
}
