import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-ot');
}

export default function WithReviewsCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-ot" />;
}
