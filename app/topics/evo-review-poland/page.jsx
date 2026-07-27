import EvoReviewPolandKeywordPage, { generateMetadata } from './evo-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewPolandKeywordPage />;
}
