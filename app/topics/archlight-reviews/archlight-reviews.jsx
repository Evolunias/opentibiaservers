import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-reviews');
}

export default function ArchlightReviewsKeywordPage() {
  return <StaticKeywordPage slug="archlight-reviews" />;
}
