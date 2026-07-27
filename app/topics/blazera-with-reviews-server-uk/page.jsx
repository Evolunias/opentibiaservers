import BlazeraWithReviewsServerUkKeywordPage, { generateMetadata } from './blazera-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerUkKeywordPage />;
}
