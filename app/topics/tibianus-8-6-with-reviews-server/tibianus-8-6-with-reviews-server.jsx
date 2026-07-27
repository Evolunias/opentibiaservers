import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-with-reviews-server');
}

export default function Tibianus86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-with-reviews-server" />;
}
