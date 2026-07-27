import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-usa');
}

export default function CoxaotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-usa" />;
}
