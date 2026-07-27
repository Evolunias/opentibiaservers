import WithReviewsCarlinotOtsKeywordPage, { generateMetadata } from './with-reviews-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotOtsKeywordPage />;
}
