import HarmoniaOt84WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt84WithReviewsServerKeywordPage />;
}
