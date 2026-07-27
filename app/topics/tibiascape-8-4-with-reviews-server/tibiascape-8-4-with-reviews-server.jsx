import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-with-reviews-server');
}

export default function Tibiascape84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-with-reviews-server" />;
}
