import EvoReviewEuropeKeywordPage, { generateMetadata } from './evo-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewEuropeKeywordPage />;
}
