import WithReviewsCarlinotServerKeywordPage, { generateMetadata } from './with-reviews-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotServerKeywordPage />;
}
