import WithReviewsRubinotClientKeywordPage, { generateMetadata } from './with-reviews-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotClientKeywordPage />;
}
