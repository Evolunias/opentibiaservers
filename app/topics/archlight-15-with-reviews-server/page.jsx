import Archlight15WithReviewsServerKeywordPage, { generateMetadata } from './archlight-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15WithReviewsServerKeywordPage />;
}
