import WithReviewsKasteriaForumKeywordPage, { generateMetadata } from './with-reviews-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaForumKeywordPage />;
}
