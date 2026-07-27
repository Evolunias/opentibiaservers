import EvoleraReviewKeywordPage, { generateMetadata } from './evolera-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraReviewKeywordPage />;
}
