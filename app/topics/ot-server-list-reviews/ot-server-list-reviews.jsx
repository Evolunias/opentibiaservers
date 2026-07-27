import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-reviews');
}

export default function OtServerListReviewsKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-reviews" />;
}
