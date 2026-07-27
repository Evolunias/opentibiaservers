import WithReviewsRealeraOtsKeywordPage, { generateMetadata } from './with-reviews-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraOtsKeywordPage />;
}
