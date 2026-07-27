import WithReviewsCyntaraPrivateServerKeywordPage, { generateMetadata } from './with-reviews-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraPrivateServerKeywordPage />;
}
