import WithReviewsArchlightForumKeywordPage, { generateMetadata } from './with-reviews-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightForumKeywordPage />;
}
