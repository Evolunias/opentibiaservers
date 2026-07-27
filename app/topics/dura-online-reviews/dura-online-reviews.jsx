import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-reviews');
}

export default function DuraOnlineReviewsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-reviews" />;
}
