import WithActivePlayersReviewChileKeywordPage, { generateMetadata } from './with-active-players-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewChileKeywordPage />;
}
