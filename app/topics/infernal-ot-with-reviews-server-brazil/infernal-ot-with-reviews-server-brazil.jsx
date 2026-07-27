import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-brazil');
}

export default function InfernalOtWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-brazil" />;
}
