import BlazeraReviewsKeywordPage, { generateMetadata } from './blazera-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraReviewsKeywordPage />;
}
