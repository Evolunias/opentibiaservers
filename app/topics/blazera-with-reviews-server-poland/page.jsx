import BlazeraWithReviewsServerPolandKeywordPage, { generateMetadata } from './blazera-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerPolandKeywordPage />;
}
