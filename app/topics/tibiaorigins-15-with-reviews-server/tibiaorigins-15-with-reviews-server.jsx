import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-with-reviews-server');
}

export default function Tibiaorigins15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-with-reviews-server" />;
}
