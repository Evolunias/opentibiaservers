import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-with-reviews-server');
}

export default function Tibiaorigins13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-with-reviews-server" />;
}
