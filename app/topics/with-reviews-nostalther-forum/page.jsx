import WithReviewsNostaltherForumKeywordPage, { generateMetadata } from './with-reviews-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherForumKeywordPage />;
}
