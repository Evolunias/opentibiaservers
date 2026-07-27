import WithReviewsElderaOtsKeywordPage, { generateMetadata } from './with-reviews-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaOtsKeywordPage />;
}
