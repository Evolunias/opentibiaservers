import WithReviewsServerListMexicoKeywordPage, { generateMetadata } from './with-reviews-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListMexicoKeywordPage />;
}
