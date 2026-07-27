import WithReviewsOtmadnessForumKeywordPage, { generateMetadata } from './with-reviews-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessForumKeywordPage />;
}
