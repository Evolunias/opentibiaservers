import EvoReviewSouthAmericaKeywordPage, { generateMetadata } from './evo-review-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewSouthAmericaKeywordPage />;
}
