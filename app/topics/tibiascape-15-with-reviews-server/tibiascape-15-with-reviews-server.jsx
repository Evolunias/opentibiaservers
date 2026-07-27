import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-with-reviews-server');
}

export default function Tibiascape15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-with-reviews-server" />;
}
