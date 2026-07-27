import WithReviewsDiscordChileKeywordPage, { generateMetadata } from './with-reviews-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDiscordChileKeywordPage />;
}
