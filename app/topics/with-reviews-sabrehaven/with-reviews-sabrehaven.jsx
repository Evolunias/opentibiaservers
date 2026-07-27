import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven');
}

export default function WithReviewsSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven" />;
}
