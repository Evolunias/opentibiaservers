import FreshStartReviewCanadaKeywordPage, { generateMetadata } from './fresh-start-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewCanadaKeywordPage />;
}
