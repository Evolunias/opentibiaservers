import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-sweden');
}

export default function ThorniaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-sweden" />;
}
