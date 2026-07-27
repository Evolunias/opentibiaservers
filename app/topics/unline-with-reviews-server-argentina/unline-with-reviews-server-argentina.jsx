import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-argentina');
}

export default function UnlineWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-argentina" />;
}
