import Archlight14WithReviewsServerKeywordPage, { generateMetadata } from './archlight-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14WithReviewsServerKeywordPage />;
}
