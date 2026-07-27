import MediviaWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './medivia-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithReviewsServerLatinAmericaKeywordPage />;
}
