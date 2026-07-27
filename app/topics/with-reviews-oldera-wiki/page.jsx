import WithReviewsOlderaWikiKeywordPage, { generateMetadata } from './with-reviews-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaWikiKeywordPage />;
}
