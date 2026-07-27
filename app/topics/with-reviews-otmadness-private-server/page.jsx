import WithReviewsOtmadnessPrivateServerKeywordPage, { generateMetadata } from './with-reviews-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessPrivateServerKeywordPage />;
}
