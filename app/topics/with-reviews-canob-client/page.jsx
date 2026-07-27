import WithReviewsCanobClientKeywordPage, { generateMetadata } from './with-reviews-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobClientKeywordPage />;
}
