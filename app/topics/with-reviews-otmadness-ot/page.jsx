import WithReviewsOtmadnessOtKeywordPage, { generateMetadata } from './with-reviews-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessOtKeywordPage />;
}
