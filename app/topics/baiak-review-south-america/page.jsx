import BaiakReviewSouthAmericaKeywordPage, { generateMetadata } from './baiak-review-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewSouthAmericaKeywordPage />;
}
