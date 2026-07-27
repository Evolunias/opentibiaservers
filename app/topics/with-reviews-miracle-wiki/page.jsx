import WithReviewsMiracleWikiKeywordPage, { generateMetadata } from './with-reviews-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleWikiKeywordPage />;
}
