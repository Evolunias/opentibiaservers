import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-europe');
}

export default function CoxaotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-europe" />;
}
