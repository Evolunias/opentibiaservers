import WithReviewsMiracleKeywordPage, { generateMetadata } from './with-reviews-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleKeywordPage />;
}
