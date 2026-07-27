import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-discord');
}

export default function Tibia14WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-discord" />;
}
