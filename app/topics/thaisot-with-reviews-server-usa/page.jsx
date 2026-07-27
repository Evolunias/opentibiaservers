import ThaisotWithReviewsServerUsaKeywordPage, { generateMetadata } from './thaisot-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWithReviewsServerUsaKeywordPage />;
}
