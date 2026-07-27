import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-poland');
}

export default function TibiascapeWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-poland" />;
}
