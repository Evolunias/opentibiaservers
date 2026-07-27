import CalmeraOtReviewKeywordPage, { generateMetadata } from './calmera-ot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtReviewKeywordPage />;
}
