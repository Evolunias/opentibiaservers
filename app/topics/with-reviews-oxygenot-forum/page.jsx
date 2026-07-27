import WithReviewsOxygenotForumKeywordPage, { generateMetadata } from './with-reviews-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotForumKeywordPage />;
}
