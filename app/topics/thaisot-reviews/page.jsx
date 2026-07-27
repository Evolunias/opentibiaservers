import ThaisotReviewsKeywordPage, { generateMetadata } from './thaisot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotReviewsKeywordPage />;
}
