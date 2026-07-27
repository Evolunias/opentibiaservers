import MediviaReviewKeywordPage, { generateMetadata } from './medivia-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaReviewKeywordPage />;
}
