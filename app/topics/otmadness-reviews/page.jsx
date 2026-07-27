import OtmadnessReviewsKeywordPage, { generateMetadata } from './otmadness-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessReviewsKeywordPage />;
}
