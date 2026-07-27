import WithReviewsForumSwedenKeywordPage, { generateMetadata } from './with-reviews-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumSwedenKeywordPage />;
}
