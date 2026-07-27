import Tibia86WithReviewsForumKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsForumKeywordPage />;
}
