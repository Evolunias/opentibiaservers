import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-with-reviews-server');
}

export default function Tibiaorigins76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-with-reviews-server" />;
}
