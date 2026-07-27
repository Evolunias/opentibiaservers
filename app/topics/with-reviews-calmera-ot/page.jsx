import WithReviewsCalmeraOtKeywordPage, { generateMetadata } from './with-reviews-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCalmeraOtKeywordPage />;
}
