import Tibia14WithReviewsForumKeywordPage, { generateMetadata } from './tibia-14-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsForumKeywordPage />;
}
