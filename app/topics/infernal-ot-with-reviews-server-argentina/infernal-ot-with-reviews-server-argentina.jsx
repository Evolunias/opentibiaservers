import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-argentina');
}

export default function InfernalOtWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-argentina" />;
}
