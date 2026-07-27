import HighExpReviewGermanyKeywordPage, { generateMetadata } from './high-exp-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewGermanyKeywordPage />;
}
