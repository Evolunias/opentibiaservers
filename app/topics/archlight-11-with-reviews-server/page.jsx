import Archlight11WithReviewsServerKeywordPage, { generateMetadata } from './archlight-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11WithReviewsServerKeywordPage />;
}
