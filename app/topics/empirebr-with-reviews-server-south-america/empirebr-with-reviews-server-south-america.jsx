import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-reviews-server-south-america');
}

export default function EmpirebrWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-reviews-server-south-america" />;
}
