import MediviaWithReviewsServerBrazilKeywordPage, { generateMetadata } from './medivia-with-reviews-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithReviewsServerBrazilKeywordPage />;
}
