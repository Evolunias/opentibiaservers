import EmpirebrReviewsKeywordPage, { generateMetadata } from './empirebr-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrReviewsKeywordPage />;
}
