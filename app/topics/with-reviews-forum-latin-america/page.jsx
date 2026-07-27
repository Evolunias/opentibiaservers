import WithReviewsForumLatinAmericaKeywordPage, { generateMetadata } from './with-reviews-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumLatinAmericaKeywordPage />;
}
