import CoxaotReviewKeywordPage, { generateMetadata } from './coxaot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotReviewKeywordPage />;
}
