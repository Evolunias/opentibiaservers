import WithReviewsRealeraOtServerKeywordPage, { generateMetadata } from './with-reviews-realera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraOtServerKeywordPage />;
}
