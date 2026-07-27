import HarmoniaOt11WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11WithReviewsServerKeywordPage />;
}
