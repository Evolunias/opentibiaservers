import WithReviewsCyntaraForumKeywordPage, { generateMetadata } from './with-reviews-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraForumKeywordPage />;
}
