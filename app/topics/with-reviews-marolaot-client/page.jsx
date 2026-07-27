import WithReviewsMarolaotClientKeywordPage, { generateMetadata } from './with-reviews-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMarolaotClientKeywordPage />;
}
