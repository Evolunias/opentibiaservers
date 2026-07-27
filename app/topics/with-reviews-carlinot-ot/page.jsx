import WithReviewsCarlinotOtKeywordPage, { generateMetadata } from './with-reviews-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotOtKeywordPage />;
}
