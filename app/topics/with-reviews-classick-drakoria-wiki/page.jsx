import WithReviewsClassickDrakoriaWikiKeywordPage, { generateMetadata } from './with-reviews-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassickDrakoriaWikiKeywordPage />;
}
