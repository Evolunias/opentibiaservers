import WithReviewsOlderaClientKeywordPage, { generateMetadata } from './with-reviews-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaClientKeywordPage />;
}
