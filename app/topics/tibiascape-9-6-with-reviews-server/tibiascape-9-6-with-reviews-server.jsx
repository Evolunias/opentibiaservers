import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-with-reviews-server');
}

export default function Tibiascape96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-with-reviews-server" />;
}
