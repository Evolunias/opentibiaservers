import EvoReviewCanadaKeywordPage, { generateMetadata } from './evo-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewCanadaKeywordPage />;
}
