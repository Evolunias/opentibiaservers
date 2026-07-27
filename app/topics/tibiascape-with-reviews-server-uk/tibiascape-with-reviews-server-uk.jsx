import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-uk');
}

export default function TibiascapeWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-uk" />;
}
