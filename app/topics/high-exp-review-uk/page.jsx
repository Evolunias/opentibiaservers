import HighExpReviewUkKeywordPage, { generateMetadata } from './high-exp-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewUkKeywordPage />;
}
