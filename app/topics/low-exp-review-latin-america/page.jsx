import LowExpReviewLatinAmericaKeywordPage, { generateMetadata } from './low-exp-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewLatinAmericaKeywordPage />;
}
