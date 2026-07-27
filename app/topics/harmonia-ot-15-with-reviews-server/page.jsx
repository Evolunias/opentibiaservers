import HarmoniaOt15WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15WithReviewsServerKeywordPage />;
}
