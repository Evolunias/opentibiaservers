import WithReviewsImperianicWikiKeywordPage, { generateMetadata } from './with-reviews-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicWikiKeywordPage />;
}
