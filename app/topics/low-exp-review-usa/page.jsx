import LowExpReviewUsaKeywordPage, { generateMetadata } from './low-exp-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewUsaKeywordPage />;
}
