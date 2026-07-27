import WithReviewsRealeraWikiKeywordPage, { generateMetadata } from './with-reviews-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraWikiKeywordPage />;
}
