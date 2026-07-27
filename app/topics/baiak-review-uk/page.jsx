import BaiakReviewUkKeywordPage, { generateMetadata } from './baiak-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewUkKeywordPage />;
}
