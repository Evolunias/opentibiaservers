import Archlight81WithReviewsServerKeywordPage, { generateMetadata } from './archlight-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight81WithReviewsServerKeywordPage />;
}
