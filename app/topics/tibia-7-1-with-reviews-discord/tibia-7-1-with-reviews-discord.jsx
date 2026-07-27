import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-reviews-discord');
}

export default function Tibia71WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-reviews-discord" />;
}
