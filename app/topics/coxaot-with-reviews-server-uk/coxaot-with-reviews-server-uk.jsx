import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-uk');
}

export default function CoxaotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-uk" />;
}
