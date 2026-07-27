import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-north-america');
}

export default function WithReviewsServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-north-america" />;
}
