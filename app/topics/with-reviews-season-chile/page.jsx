import WithReviewsSeasonChileKeywordPage, { generateMetadata } from './with-reviews-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonChileKeywordPage />;
}
