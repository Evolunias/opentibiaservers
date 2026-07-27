import VenoreotWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './venoreot-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithReviewsServerLatinAmericaKeywordPage />;
}
