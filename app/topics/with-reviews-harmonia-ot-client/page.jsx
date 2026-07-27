import WithReviewsHarmoniaOtClientKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtClientKeywordPage />;
}
