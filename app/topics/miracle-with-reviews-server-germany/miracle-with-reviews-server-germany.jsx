import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-germany');
}

export default function MiracleWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-germany" />;
}
