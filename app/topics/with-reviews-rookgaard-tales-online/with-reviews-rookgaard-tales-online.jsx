import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-online');
}

export default function WithReviewsRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-online" />;
}
