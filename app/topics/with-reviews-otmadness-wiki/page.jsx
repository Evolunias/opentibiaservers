import WithReviewsOtmadnessWikiKeywordPage, { generateMetadata } from './with-reviews-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessWikiKeywordPage />;
}
