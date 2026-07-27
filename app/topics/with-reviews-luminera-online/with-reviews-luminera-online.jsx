import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-online');
}

export default function WithReviewsLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-online" />;
}
