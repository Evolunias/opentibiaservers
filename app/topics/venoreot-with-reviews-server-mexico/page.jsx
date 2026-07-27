import VenoreotWithReviewsServerMexicoKeywordPage, { generateMetadata } from './venoreot-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithReviewsServerMexicoKeywordPage />;
}
