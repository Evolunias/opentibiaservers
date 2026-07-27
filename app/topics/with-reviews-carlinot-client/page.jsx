import WithReviewsCarlinotClientKeywordPage, { generateMetadata } from './with-reviews-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotClientKeywordPage />;
}
