import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-germany');
}

export default function CoxaotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-germany" />;
}
