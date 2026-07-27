import WithReviewsClientChileKeywordPage, { generateMetadata } from './with-reviews-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientChileKeywordPage />;
}
