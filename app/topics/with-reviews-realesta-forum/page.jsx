import WithReviewsRealestaForumKeywordPage, { generateMetadata } from './with-reviews-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaForumKeywordPage />;
}
