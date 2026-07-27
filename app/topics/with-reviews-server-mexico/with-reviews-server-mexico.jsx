import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-mexico');
}

export default function WithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-mexico" />;
}
