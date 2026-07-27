import WithReviewsCanobOtsKeywordPage, { generateMetadata } from './with-reviews-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobOtsKeywordPage />;
}
