import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-with-reviews-server');
}

export default function BaiakIlusion11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-with-reviews-server" />;
}
