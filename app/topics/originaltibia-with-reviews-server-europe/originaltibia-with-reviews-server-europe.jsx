import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-europe');
}

export default function OriginaltibiaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-europe" />;
}
