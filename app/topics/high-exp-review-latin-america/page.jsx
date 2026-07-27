import HighExpReviewLatinAmericaKeywordPage, { generateMetadata } from './high-exp-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewLatinAmericaKeywordPage />;
}
