import WithReviewsDemolidoresWikiKeywordPage, { generateMetadata } from './with-reviews-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDemolidoresWikiKeywordPage />;
}
