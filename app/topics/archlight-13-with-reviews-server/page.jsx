import Archlight13WithReviewsServerKeywordPage, { generateMetadata } from './archlight-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13WithReviewsServerKeywordPage />;
}
