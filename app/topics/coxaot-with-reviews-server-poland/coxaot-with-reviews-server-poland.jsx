import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-poland');
}

export default function CoxaotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-poland" />;
}
