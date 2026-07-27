import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-sweden');
}

export default function SaintsotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-sweden" />;
}
