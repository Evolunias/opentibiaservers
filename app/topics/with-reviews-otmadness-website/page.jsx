import WithReviewsOtmadnessWebsiteKeywordPage, { generateMetadata } from './with-reviews-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessWebsiteKeywordPage />;
}
