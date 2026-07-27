import BlazeraWithReviewsServerChileKeywordPage, { generateMetadata } from './blazera-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerChileKeywordPage />;
}
