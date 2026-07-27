import Tibia15WithReviewsForumKeywordPage, { generateMetadata } from './tibia-15-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsForumKeywordPage />;
}
