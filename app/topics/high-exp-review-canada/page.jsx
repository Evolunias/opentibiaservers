import HighExpReviewCanadaKeywordPage, { generateMetadata } from './high-exp-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewCanadaKeywordPage />;
}
