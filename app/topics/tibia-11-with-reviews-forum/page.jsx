import Tibia11WithReviewsForumKeywordPage, { generateMetadata } from './tibia-11-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsForumKeywordPage />;
}
