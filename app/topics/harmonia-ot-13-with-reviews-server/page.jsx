import HarmoniaOt13WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13WithReviewsServerKeywordPage />;
}
