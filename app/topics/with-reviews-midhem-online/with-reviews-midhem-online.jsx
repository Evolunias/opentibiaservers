import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-online');
}

export default function WithReviewsMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-online" />;
}
