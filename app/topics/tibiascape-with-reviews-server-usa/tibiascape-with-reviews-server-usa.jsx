import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-usa');
}

export default function TibiascapeWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-usa" />;
}
