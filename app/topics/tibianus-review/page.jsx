import TibianusReviewKeywordPage, { generateMetadata } from './tibianus-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusReviewKeywordPage />;
}
