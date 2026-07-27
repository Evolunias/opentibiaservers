import EvoReviewMexicoKeywordPage, { generateMetadata } from './evo-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewMexicoKeywordPage />;
}
