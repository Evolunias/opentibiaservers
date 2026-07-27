import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-sweden');
}

export default function NoxiousotWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-sweden" />;
}
