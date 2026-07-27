import BaiakReviewPolandKeywordPage, { generateMetadata } from './baiak-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewPolandKeywordPage />;
}
