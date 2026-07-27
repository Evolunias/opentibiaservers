import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-ot');
}

export default function WithReviewsMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-ot" />;
}
