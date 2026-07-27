import WithReviewsOxygenotLoginKeywordPage, { generateMetadata } from './with-reviews-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotLoginKeywordPage />;
}
