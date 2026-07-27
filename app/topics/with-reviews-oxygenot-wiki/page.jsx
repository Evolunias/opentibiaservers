import WithReviewsOxygenotWikiKeywordPage, { generateMetadata } from './with-reviews-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotWikiKeywordPage />;
}
