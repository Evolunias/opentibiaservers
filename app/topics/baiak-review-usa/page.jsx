import BaiakReviewUsaKeywordPage, { generateMetadata } from './baiak-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewUsaKeywordPage />;
}
