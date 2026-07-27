import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-mexico');
}

export default function TibijkaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-mexico" />;
}
