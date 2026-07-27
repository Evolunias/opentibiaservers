import WithReviewsCarlinotOtServerKeywordPage, { generateMetadata } from './with-reviews-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotOtServerKeywordPage />;
}
