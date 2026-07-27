import WithReviewsMiraclePrivateServerKeywordPage, { generateMetadata } from './with-reviews-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiraclePrivateServerKeywordPage />;
}
