import LowExpReviewGermanyKeywordPage, { generateMetadata } from './low-exp-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewGermanyKeywordPage />;
}
