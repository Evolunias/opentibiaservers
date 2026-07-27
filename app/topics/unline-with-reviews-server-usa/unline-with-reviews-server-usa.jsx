import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-usa');
}

export default function UnlineWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-usa" />;
}
