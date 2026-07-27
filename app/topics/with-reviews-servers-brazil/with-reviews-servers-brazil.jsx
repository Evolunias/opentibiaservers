import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-brazil');
}

export default function WithReviewsServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-brazil" />;
}
