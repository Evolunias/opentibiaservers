import WithReviewsCanobForumKeywordPage, { generateMetadata } from './with-reviews-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobForumKeywordPage />;
}
