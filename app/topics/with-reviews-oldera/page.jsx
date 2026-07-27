import WithReviewsOlderaKeywordPage, { generateMetadata } from './with-reviews-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaKeywordPage />;
}
