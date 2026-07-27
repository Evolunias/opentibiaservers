import WithReviewsNepreniaOtKeywordPage, { generateMetadata } from './with-reviews-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaOtKeywordPage />;
}
