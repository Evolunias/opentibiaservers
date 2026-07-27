import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-south-america');
}

export default function WithReviewsPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-south-america" />;
}
