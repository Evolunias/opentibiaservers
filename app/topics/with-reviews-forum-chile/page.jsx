import WithReviewsForumChileKeywordPage, { generateMetadata } from './with-reviews-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumChileKeywordPage />;
}
