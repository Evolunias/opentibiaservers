import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-canada');
}

export default function CoxaotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-canada" />;
}
