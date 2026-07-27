import WithReviewsRealeraForumKeywordPage, { generateMetadata } from './with-reviews-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraForumKeywordPage />;
}
