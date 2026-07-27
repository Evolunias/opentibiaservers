import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-usa');
}

export default function TibianusWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-usa" />;
}
