import WithReviewsMarolaotServerKeywordPage, { generateMetadata } from './with-reviews-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMarolaotServerKeywordPage />;
}
