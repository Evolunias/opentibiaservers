import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-discord');
}

export default function Tibia12WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-discord" />;
}
