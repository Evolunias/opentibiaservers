import Tibia100WithReviewsForumKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsForumKeywordPage />;
}
