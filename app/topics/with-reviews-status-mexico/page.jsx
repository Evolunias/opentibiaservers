import WithReviewsStatusMexicoKeywordPage, { generateMetadata } from './with-reviews-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusMexicoKeywordPage />;
}
