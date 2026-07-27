import Archlight71WithReviewsServerKeywordPage, { generateMetadata } from './archlight-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71WithReviewsServerKeywordPage />;
}
