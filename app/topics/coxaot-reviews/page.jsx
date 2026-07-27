import CoxaotReviewsKeywordPage, { generateMetadata } from './coxaot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotReviewsKeywordPage />;
}
