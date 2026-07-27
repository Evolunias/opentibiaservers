import WithReviewsOlderaOtsKeywordPage, { generateMetadata } from './with-reviews-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaOtsKeywordPage />;
}
