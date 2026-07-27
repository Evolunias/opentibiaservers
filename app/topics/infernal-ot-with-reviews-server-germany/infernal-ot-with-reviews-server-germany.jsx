import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-germany');
}

export default function InfernalOtWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-germany" />;
}
