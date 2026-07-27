import WithReviewsMediviaPrivateServerKeywordPage, { generateMetadata } from './with-reviews-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaPrivateServerKeywordPage />;
}
