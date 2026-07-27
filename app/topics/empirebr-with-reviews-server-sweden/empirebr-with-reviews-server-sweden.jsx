import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-sweden');
}

export default function EmpirebrWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-sweden" />;
}
