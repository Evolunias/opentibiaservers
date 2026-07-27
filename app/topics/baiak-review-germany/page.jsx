import BaiakReviewGermanyKeywordPage, { generateMetadata } from './baiak-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewGermanyKeywordPage />;
}
