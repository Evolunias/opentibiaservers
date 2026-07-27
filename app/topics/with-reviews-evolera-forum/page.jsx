import WithReviewsEvoleraForumKeywordPage, { generateMetadata } from './with-reviews-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraForumKeywordPage />;
}
