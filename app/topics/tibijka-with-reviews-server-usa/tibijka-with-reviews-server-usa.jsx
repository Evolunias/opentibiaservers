import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-usa');
}

export default function TibijkaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-usa" />;
}
