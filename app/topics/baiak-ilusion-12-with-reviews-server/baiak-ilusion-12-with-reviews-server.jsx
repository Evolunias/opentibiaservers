import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-with-reviews-server');
}

export default function BaiakIlusion12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-with-reviews-server" />;
}
