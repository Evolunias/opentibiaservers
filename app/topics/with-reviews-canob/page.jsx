import WithReviewsCanobKeywordPage, { generateMetadata } from './with-reviews-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobKeywordPage />;
}
