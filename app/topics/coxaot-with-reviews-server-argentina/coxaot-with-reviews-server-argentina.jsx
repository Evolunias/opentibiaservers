import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-argentina');
}

export default function CoxaotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-argentina" />;
}
