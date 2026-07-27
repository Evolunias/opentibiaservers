import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-europe');
}

export default function TibiascapeWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-europe" />;
}
