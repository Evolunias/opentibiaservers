import RealeraReviewsKeywordPage, { generateMetadata } from './realera-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraReviewsKeywordPage />;
}
