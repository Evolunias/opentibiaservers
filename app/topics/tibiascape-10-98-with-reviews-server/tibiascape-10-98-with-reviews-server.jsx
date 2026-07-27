import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-with-reviews-server');
}

export default function Tibiascape1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-with-reviews-server" />;
}
