import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-argentina');
}

export default function EmpirebrWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-argentina" />;
}
