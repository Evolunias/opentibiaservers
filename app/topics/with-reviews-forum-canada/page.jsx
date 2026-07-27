import WithReviewsForumCanadaKeywordPage, { generateMetadata } from './with-reviews-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumCanadaKeywordPage />;
}
