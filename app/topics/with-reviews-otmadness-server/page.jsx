import WithReviewsOtmadnessServerKeywordPage, { generateMetadata } from './with-reviews-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessServerKeywordPage />;
}
