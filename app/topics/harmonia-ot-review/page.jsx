import HarmoniaOtReviewKeywordPage, { generateMetadata } from './harmonia-ot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtReviewKeywordPage />;
}
