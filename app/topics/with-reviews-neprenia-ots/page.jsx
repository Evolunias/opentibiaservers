import WithReviewsNepreniaOtsKeywordPage, { generateMetadata } from './with-reviews-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaOtsKeywordPage />;
}
