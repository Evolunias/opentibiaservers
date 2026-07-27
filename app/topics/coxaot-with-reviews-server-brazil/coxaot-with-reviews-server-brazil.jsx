import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-brazil');
}

export default function CoxaotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-brazil" />;
}
