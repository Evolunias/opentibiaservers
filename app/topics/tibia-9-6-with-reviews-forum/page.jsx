import Tibia96WithReviewsForumKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsForumKeywordPage />;
}
