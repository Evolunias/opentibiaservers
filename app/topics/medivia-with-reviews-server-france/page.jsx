import MediviaWithReviewsServerFranceKeywordPage, { generateMetadata } from './medivia-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithReviewsServerFranceKeywordPage />;
}
