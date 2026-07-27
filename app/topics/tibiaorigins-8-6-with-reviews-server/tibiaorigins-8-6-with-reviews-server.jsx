import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-6-with-reviews-server');
}

export default function Tibiaorigins86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-6-with-reviews-server" />;
}
