import WithReviewsOtmadnessOtServerKeywordPage, { generateMetadata } from './with-reviews-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessOtServerKeywordPage />;
}
