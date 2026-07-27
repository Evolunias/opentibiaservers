import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-sweden');
}

export default function ShadowcoresWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-sweden" />;
}
