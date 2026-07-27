import WithReviewsInfernalOtServerKeywordPage, { generateMetadata } from './with-reviews-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsInfernalOtServerKeywordPage />;
}
