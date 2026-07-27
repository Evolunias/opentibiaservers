import ThaisotWithReviewsServerCanadaKeywordPage, { generateMetadata } from './thaisot-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWithReviewsServerCanadaKeywordPage />;
}
