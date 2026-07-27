import RealestaReviewsKeywordPage, { generateMetadata } from './realesta-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaReviewsKeywordPage />;
}
