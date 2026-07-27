import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-with-reviews-server');
}

export default function Tibiascape86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-with-reviews-server" />;
}
