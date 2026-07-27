import WithReviewsOxygenotClientKeywordPage, { generateMetadata } from './with-reviews-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotClientKeywordPage />;
}
