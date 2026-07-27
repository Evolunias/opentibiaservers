import HighExpReviewPolandKeywordPage, { generateMetadata } from './high-exp-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewPolandKeywordPage />;
}
