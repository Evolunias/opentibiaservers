import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-germany');
}

export default function ElderaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-germany" />;
}
