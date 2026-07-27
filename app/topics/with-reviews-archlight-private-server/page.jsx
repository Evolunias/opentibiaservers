import WithReviewsArchlightPrivateServerKeywordPage, { generateMetadata } from './with-reviews-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightPrivateServerKeywordPage />;
}
