import LowExpReviewBrazilKeywordPage, { generateMetadata } from './low-exp-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewBrazilKeywordPage />;
}
