import EmpirebrReviewKeywordPage, { generateMetadata } from './empirebr-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrReviewKeywordPage />;
}
