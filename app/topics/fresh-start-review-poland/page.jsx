import FreshStartReviewPolandKeywordPage, { generateMetadata } from './fresh-start-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewPolandKeywordPage />;
}
