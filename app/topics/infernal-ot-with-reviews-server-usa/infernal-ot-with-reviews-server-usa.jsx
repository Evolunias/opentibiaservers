import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-usa');
}

export default function InfernalOtWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-usa" />;
}
