import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-sweden');
}

export default function CoxaotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-sweden" />;
}
