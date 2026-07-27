import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-mexico');
}

export default function WithReviewsServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-mexico" />;
}
