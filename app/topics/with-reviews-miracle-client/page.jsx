import WithReviewsMiracleClientKeywordPage, { generateMetadata } from './with-reviews-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleClientKeywordPage />;
}
