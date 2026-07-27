import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-with-reviews-server');
}

export default function BaiakIlusion84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-with-reviews-server" />;
}
