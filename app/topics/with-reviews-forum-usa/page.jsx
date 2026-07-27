import WithReviewsForumUsaKeywordPage, { generateMetadata } from './with-reviews-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumUsaKeywordPage />;
}
