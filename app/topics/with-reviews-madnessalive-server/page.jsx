import WithReviewsMadnessaliveServerKeywordPage, { generateMetadata } from './with-reviews-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMadnessaliveServerKeywordPage />;
}
