import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-north-america');
}

export default function InfernalOtWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-north-america" />;
}
