import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-reviews');
}

export default function NonPvpOtServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-reviews" />;
}
