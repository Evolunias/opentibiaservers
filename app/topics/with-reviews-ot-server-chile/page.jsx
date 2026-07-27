import WithReviewsOtServerChileKeywordPage, { generateMetadata } from './with-reviews-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerChileKeywordPage />;
}
