import CalmeraOtReviewsKeywordPage, { generateMetadata } from './calmera-ot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtReviewsKeywordPage />;
}
