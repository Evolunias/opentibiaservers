import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-discord');
}

export default function Tibia15WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-discord" />;
}
