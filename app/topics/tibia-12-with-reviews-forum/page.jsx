import Tibia12WithReviewsForumKeywordPage, { generateMetadata } from './tibia-12-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsForumKeywordPage />;
}
