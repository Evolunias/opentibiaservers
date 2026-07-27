import WithReviewsAmeriaOtsKeywordPage, { generateMetadata } from './with-reviews-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaOtsKeywordPage />;
}
