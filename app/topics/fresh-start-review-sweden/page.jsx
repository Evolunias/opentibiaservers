import FreshStartReviewSwedenKeywordPage, { generateMetadata } from './fresh-start-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewSwedenKeywordPage />;
}
