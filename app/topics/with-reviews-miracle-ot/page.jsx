import WithReviewsMiracleOtKeywordPage, { generateMetadata } from './with-reviews-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleOtKeywordPage />;
}
