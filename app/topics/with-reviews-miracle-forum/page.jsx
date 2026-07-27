import WithReviewsMiracleForumKeywordPage, { generateMetadata } from './with-reviews-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleForumKeywordPage />;
}
