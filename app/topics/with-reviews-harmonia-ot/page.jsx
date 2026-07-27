import WithReviewsHarmoniaOtKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtKeywordPage />;
}
