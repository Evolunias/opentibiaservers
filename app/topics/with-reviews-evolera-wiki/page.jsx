import WithReviewsEvoleraWikiKeywordPage, { generateMetadata } from './with-reviews-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraWikiKeywordPage />;
}
