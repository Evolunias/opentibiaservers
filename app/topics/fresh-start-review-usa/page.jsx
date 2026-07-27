import FreshStartReviewUsaKeywordPage, { generateMetadata } from './fresh-start-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewUsaKeywordPage />;
}
