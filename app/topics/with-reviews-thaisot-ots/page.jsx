import WithReviewsThaisotOtsKeywordPage, { generateMetadata } from './with-reviews-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotOtsKeywordPage />;
}
