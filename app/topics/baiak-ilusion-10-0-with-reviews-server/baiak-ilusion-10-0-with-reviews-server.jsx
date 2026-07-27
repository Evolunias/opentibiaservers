import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-with-reviews-server');
}

export default function BaiakIlusion100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-with-reviews-server" />;
}
