import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-reviews-discord');
}

export default function Tibia74WithReviewsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-reviews-discord" />;
}
