import WithReviewsMiracleLoginKeywordPage, { generateMetadata } from './with-reviews-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleLoginKeywordPage />;
}
