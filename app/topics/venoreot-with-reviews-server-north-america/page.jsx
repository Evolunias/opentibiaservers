import VenoreotWithReviewsServerNorthAmericaKeywordPage, { generateMetadata } from './venoreot-with-reviews-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithReviewsServerNorthAmericaKeywordPage />;
}
