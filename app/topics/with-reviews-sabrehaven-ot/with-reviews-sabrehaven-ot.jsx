import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-ot');
}

export default function WithReviewsSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-ot" />;
}
