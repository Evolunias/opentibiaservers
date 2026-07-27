import WithReviewsOtServerCanadaKeywordPage, { generateMetadata } from './with-reviews-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerCanadaKeywordPage />;
}
