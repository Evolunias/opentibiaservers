import WithReviewsNepreniaWikiKeywordPage, { generateMetadata } from './with-reviews-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaWikiKeywordPage />;
}
