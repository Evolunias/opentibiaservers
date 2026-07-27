import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-south-america');
}

export default function WithReviewsDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-south-america" />;
}
