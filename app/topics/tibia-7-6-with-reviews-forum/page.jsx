import Tibia76WithReviewsForumKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsForumKeywordPage />;
}
