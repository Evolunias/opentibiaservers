import EvoReviewUkKeywordPage, { generateMetadata } from './evo-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewUkKeywordPage />;
}
