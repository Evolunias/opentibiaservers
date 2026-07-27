import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-sweden');
}

export default function InfernalOtWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-sweden" />;
}
