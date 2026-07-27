import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-chile');
}

export default function WithDiscordReviewChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-chile" />;
}
