import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-chile');
}

export default function WithReviewsDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-chile" />;
}
