import HarmoniaOt96WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt96WithReviewsServerKeywordPage />;
}
