import HarmoniaOt14WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14WithReviewsServerKeywordPage />;
}
