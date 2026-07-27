import LowExpReviewEuropeKeywordPage, { generateMetadata } from './low-exp-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewEuropeKeywordPage />;
}
