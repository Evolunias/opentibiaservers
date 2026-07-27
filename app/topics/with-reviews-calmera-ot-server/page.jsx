import WithReviewsCalmeraOtServerKeywordPage, { generateMetadata } from './with-reviews-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCalmeraOtServerKeywordPage />;
}
