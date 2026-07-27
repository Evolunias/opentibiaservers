import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-usa');
}

export default function OriginaltibiaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-usa" />;
}
