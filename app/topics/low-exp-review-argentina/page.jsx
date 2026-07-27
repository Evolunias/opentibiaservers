import LowExpReviewArgentinaKeywordPage, { generateMetadata } from './low-exp-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewArgentinaKeywordPage />;
}
