import WithReviewsMidhemForumKeywordPage, { generateMetadata } from './with-reviews-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemForumKeywordPage />;
}
