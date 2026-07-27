import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-with-reviews-server');
}

export default function Tibiaorigins71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-with-reviews-server" />;
}
