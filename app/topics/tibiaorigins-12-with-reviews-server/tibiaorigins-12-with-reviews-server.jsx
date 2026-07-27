import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-with-reviews-server');
}

export default function Tibiaorigins12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-with-reviews-server" />;
}
