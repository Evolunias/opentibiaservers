import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-with-reviews-server');
}

export default function Tibiascape14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-with-reviews-server" />;
}
