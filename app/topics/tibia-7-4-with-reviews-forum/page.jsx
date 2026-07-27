import Tibia74WithReviewsForumKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsForumKeywordPage />;
}
