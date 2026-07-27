import WithReviewsRubinotWikiKeywordPage, { generateMetadata } from './with-reviews-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotWikiKeywordPage />;
}
