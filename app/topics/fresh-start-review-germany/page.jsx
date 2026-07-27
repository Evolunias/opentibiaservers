import FreshStartReviewGermanyKeywordPage, { generateMetadata } from './fresh-start-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewGermanyKeywordPage />;
}
