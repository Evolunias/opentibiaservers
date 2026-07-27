import WithReviewsElderaForumKeywordPage, { generateMetadata } from './with-reviews-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaForumKeywordPage />;
}
