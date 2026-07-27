import EvoReviewBrazilKeywordPage, { generateMetadata } from './evo-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewBrazilKeywordPage />;
}
