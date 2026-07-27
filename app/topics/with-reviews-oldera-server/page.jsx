import WithReviewsOlderaServerKeywordPage, { generateMetadata } from './with-reviews-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaServerKeywordPage />;
}
