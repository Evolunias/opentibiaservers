import WithReviewsArchlightWikiKeywordPage, { generateMetadata } from './with-reviews-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightWikiKeywordPage />;
}
