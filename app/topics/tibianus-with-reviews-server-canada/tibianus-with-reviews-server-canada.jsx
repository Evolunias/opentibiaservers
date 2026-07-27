import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-canada');
}

export default function TibianusWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-canada" />;
}
