import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-sweden');
}

export default function OxygenotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-sweden" />;
}
