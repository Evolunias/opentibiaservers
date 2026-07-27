import WithReviewsServerMexicoKeywordPage, { generateMetadata } from './with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerMexicoKeywordPage />;
}
