import WithReviewsAlasteraForumKeywordPage, { generateMetadata } from './with-reviews-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraForumKeywordPage />;
}
