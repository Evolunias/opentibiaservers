import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-germany');
}

export default function OriginaltibiaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-germany" />;
}
