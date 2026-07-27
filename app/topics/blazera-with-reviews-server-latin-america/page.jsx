import BlazeraWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './blazera-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerLatinAmericaKeywordPage />;
}
