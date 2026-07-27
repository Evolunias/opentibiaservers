import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-germany');
}

export default function OlderaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-germany" />;
}
