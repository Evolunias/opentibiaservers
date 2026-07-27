import WithReviewsForumMexicoKeywordPage, { generateMetadata } from './with-reviews-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumMexicoKeywordPage />;
}
