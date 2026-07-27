import WithReviewsHarmoniaOtTibiaKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtTibiaKeywordPage />;
}
