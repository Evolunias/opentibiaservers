import WithReviewsOtmadnessKeywordPage, { generateMetadata } from './with-reviews-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessKeywordPage />;
}
