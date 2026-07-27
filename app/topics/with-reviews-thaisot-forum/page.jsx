import WithReviewsThaisotForumKeywordPage, { generateMetadata } from './with-reviews-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotForumKeywordPage />;
}
