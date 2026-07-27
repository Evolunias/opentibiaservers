import InfernalOtReviewKeywordPage, { generateMetadata } from './infernal-ot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtReviewKeywordPage />;
}
