import WithReviewsAmeriaForumKeywordPage, { generateMetadata } from './with-reviews-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaForumKeywordPage />;
}
