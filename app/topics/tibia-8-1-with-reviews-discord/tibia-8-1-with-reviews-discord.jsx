import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-reviews-discord');
}

export default function Tibia81WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-reviews-discord" />;
}
