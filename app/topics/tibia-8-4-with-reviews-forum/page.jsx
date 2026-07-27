import Tibia84WithReviewsForumKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsForumKeywordPage />;
}
