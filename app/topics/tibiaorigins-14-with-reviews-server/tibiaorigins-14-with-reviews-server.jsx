import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-with-reviews-server');
}

export default function Tibiaorigins14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-with-reviews-server" />;
}
