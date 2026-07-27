import BaiakReviewArgentinaKeywordPage, { generateMetadata } from './baiak-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewArgentinaKeywordPage />;
}
