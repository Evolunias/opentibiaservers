import Tibia71WithReviewsForumKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsForumKeywordPage />;
}
