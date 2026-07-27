import BaiakReviewBrazilKeywordPage, { generateMetadata } from './baiak-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewBrazilKeywordPage />;
}
