import WithReviewsForumEuropeKeywordPage, { generateMetadata } from './with-reviews-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumEuropeKeywordPage />;
}
