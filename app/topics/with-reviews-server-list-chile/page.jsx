import WithReviewsServerListChileKeywordPage, { generateMetadata } from './with-reviews-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListChileKeywordPage />;
}
