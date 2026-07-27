import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-sweden');
}

export default function ArcaniarlWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-sweden" />;
}
