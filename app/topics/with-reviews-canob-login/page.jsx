import WithReviewsCanobLoginKeywordPage, { generateMetadata } from './with-reviews-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobLoginKeywordPage />;
}
