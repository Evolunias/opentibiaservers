import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-with-reviews-server');
}

export default function Tibiascape13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-with-reviews-server" />;
}
