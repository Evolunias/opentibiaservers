import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-discord');
}

export default function Tibia11WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-discord" />;
}
