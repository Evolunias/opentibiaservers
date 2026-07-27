import WithDiscordReviewChileKeywordPage, { generateMetadata } from './with-discord-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewChileKeywordPage />;
}
