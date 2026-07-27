import HarmoniaOt80WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80WithReviewsServerKeywordPage />;
}
