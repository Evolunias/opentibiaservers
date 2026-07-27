import Archlight84WithReviewsServerKeywordPage, { generateMetadata } from './archlight-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight84WithReviewsServerKeywordPage />;
}
