import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-germany');
}

export default function TibiascapeWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-germany" />;
}
