import WithReviewsInfernalOtKeywordPage, { generateMetadata } from './with-reviews-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsInfernalOtKeywordPage />;
}
