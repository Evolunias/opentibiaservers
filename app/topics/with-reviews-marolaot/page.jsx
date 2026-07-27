import WithReviewsMarolaotKeywordPage, { generateMetadata } from './with-reviews-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMarolaotKeywordPage />;
}
