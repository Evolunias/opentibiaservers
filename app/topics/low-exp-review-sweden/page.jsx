import LowExpReviewSwedenKeywordPage, { generateMetadata } from './low-exp-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewSwedenKeywordPage />;
}
