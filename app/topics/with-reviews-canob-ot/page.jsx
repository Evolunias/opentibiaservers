import WithReviewsCanobOtKeywordPage, { generateMetadata } from './with-reviews-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobOtKeywordPage />;
}
