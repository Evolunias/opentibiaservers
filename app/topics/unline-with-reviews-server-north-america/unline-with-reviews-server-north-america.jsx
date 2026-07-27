import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-north-america');
}

export default function UnlineWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-north-america" />;
}
