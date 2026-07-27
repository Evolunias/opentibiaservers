import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-reviews-discord');
}

export default function Tibia84WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-reviews-discord" />;
}
