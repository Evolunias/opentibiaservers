import Tibia80WithReviewsForumKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsForumKeywordPage />;
}
