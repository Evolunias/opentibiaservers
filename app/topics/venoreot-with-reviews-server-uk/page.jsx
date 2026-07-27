import VenoreotWithReviewsServerUkKeywordPage, { generateMetadata } from './venoreot-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithReviewsServerUkKeywordPage />;
}
