import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-latin-america');
}

export default function WithReviewsOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-latin-america" />;
}
