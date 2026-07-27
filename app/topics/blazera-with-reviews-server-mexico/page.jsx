import BlazeraWithReviewsServerMexicoKeywordPage, { generateMetadata } from './blazera-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerMexicoKeywordPage />;
}
