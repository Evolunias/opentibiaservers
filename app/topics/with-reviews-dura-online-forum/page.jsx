import WithReviewsDuraOnlineForumKeywordPage, { generateMetadata } from './with-reviews-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineForumKeywordPage />;
}
