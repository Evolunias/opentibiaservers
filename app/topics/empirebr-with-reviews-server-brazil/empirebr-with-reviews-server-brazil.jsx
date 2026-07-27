import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-brazil');
}

export default function EmpirebrWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-brazil" />;
}
