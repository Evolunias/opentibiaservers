import WithReviewsForumBrazilKeywordPage, { generateMetadata } from './with-reviews-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumBrazilKeywordPage />;
}
