import EvoleraReviewsKeywordPage, { generateMetadata } from './evolera-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraReviewsKeywordPage />;
}
