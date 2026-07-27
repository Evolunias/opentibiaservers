import WithReviewsCarlinotKeywordPage, { generateMetadata } from './with-reviews-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotKeywordPage />;
}
