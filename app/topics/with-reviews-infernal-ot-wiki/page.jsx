import WithReviewsInfernalOtWikiKeywordPage, { generateMetadata } from './with-reviews-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsInfernalOtWikiKeywordPage />;
}
