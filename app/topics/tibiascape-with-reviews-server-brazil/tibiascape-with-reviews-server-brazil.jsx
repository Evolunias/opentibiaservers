import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-brazil');
}

export default function TibiascapeWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-brazil" />;
}
