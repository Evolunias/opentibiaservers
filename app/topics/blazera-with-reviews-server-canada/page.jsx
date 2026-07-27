import BlazeraWithReviewsServerCanadaKeywordPage, { generateMetadata } from './blazera-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerCanadaKeywordPage />;
}
