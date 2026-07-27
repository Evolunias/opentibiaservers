import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-canada');
}

export default function TibiascapeWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-canada" />;
}
