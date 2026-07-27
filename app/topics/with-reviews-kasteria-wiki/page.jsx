import WithReviewsKasteriaWikiKeywordPage, { generateMetadata } from './with-reviews-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaWikiKeywordPage />;
}
