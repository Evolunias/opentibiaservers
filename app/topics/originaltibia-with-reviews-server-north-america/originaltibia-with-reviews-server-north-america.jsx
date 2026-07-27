import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-north-america');
}

export default function OriginaltibiaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-north-america" />;
}
