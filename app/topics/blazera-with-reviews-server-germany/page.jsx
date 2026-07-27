import BlazeraWithReviewsServerGermanyKeywordPage, { generateMetadata } from './blazera-with-reviews-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerGermanyKeywordPage />;
}
