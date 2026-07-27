import WithReviewsImperianicOtsKeywordPage, { generateMetadata } from './with-reviews-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicOtsKeywordPage />;
}
