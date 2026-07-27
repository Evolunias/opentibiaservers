import BaiakReviewSwedenKeywordPage, { generateMetadata } from './baiak-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewSwedenKeywordPage />;
}
