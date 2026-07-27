import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-mexico');
}

export default function TibiascapeWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-mexico" />;
}
