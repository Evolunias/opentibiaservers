import HarmoniaOt12WithReviewsServerKeywordPage, { generateMetadata } from './harmonia-ot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12WithReviewsServerKeywordPage />;
}
