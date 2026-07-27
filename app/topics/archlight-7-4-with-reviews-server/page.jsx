import Archlight74WithReviewsServerKeywordPage, { generateMetadata } from './archlight-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight74WithReviewsServerKeywordPage />;
}
