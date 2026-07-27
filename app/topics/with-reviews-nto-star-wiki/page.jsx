import WithReviewsNtoStarWikiKeywordPage, { generateMetadata } from './with-reviews-nto-star-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarWikiKeywordPage />;
}
