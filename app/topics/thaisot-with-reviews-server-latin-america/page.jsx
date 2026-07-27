import ThaisotWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './thaisot-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWithReviewsServerLatinAmericaKeywordPage />;
}
