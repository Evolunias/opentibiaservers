import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-reviews');
}

export default function TfsServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-reviews" />;
}
