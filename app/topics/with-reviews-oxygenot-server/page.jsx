import WithReviewsOxygenotServerKeywordPage, { generateMetadata } from './with-reviews-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotServerKeywordPage />;
}
