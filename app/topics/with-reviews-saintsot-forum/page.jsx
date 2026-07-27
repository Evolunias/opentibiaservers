import WithReviewsSaintsotForumKeywordPage, { generateMetadata } from './with-reviews-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotForumKeywordPage />;
}
