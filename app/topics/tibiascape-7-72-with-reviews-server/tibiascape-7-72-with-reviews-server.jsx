import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-with-reviews-server');
}

export default function Tibiascape772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-with-reviews-server" />;
}
