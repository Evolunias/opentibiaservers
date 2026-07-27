import BaiakReviewCanadaKeywordPage, { generateMetadata } from './baiak-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewCanadaKeywordPage />;
}
