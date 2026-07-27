import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-with-reviews-server');
}

export default function Tibiaorigins100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-with-reviews-server" />;
}
