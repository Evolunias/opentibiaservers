import SerenityWithReviewsServerChileKeywordPage, { generateMetadata } from './serenity-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityWithReviewsServerChileKeywordPage />;
}
