import WithReviewsNtoStarForumKeywordPage, { generateMetadata } from './with-reviews-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarForumKeywordPage />;
}
