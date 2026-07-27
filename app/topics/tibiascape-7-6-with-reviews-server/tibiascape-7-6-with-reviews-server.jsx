import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-with-reviews-server');
}

export default function Tibiascape76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-with-reviews-server" />;
}
