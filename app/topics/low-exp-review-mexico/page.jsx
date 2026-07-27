import LowExpReviewMexicoKeywordPage, { generateMetadata } from './low-exp-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewMexicoKeywordPage />;
}
