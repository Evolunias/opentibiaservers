import HighExpReviewBrazilKeywordPage, { generateMetadata } from './high-exp-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewBrazilKeywordPage />;
}
