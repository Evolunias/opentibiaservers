import WithReviewsMarolaotRulesKeywordPage, { generateMetadata } from './with-reviews-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMarolaotRulesKeywordPage />;
}
