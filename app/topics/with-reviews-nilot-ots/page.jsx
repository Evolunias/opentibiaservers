import WithReviewsNilotOtsKeywordPage, { generateMetadata } from './with-reviews-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotOtsKeywordPage />;
}
