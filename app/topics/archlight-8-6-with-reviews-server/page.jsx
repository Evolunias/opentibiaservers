import Archlight86WithReviewsServerKeywordPage, { generateMetadata } from './archlight-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight86WithReviewsServerKeywordPage />;
}
