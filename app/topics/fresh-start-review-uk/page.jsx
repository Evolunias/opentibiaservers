import FreshStartReviewUkKeywordPage, { generateMetadata } from './fresh-start-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewUkKeywordPage />;
}
