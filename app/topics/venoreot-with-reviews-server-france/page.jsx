import VenoreotWithReviewsServerFranceKeywordPage, { generateMetadata } from './venoreot-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithReviewsServerFranceKeywordPage />;
}
