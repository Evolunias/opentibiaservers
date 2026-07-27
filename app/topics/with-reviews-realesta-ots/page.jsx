import WithReviewsRealestaOtsKeywordPage, { generateMetadata } from './with-reviews-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaOtsKeywordPage />;
}
